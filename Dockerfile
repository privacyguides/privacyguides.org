FROM python:3.12 as base

# Setup env
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONFAULTHANDLER 1

FROM base AS python-deps

# Install pipenv and compilation dependencies
RUN pip install pipenv
RUN apt-get update && apt-get install -y --no-install-recommends gcc

# Install python dependencies in /.venv
COPY modules/mkdocs-material ./modules/mkdocs-material
COPY Pipfile .
COPY Pipfile.lock .
RUN PIPENV_VENV_IN_PROJECT=1 pipenv install --deploy

FROM base AS runtime

# Install runtime dependencies
RUN apt-get update && apt-get install --no-install-recommends -y pngquant libcairo2-dev libfreetype6-dev libffi-dev libjpeg-dev libpng-dev libz-dev

# Copy virtual env from python-deps stage
COPY --from=python-deps /.venv /.venv
COPY --from=python-deps /modules/mkdocs-material /modules/mkdocs-material
ENV PATH="/.venv/bin:$PATH"

# Create and switch to a new user
RUN useradd --create-home user
WORKDIR /home/user

COPY docs docs
COPY theme theme
COPY includes includes
COPY config/*.yml config/
COPY config/layouts config/layouts
COPY config/.cache/plugin/social/fonts config/.cache/plugin/social/fonts
RUN chown -R user:user .

USER user

EXPOSE 8000

ENV MKDOCS_INHERIT mkdocs-production.yml

HEALTHCHECK NONE

ENTRYPOINT ["mkdocs"]
CMD ["serve", "--dev-addr=0.0.0.0:8000", "--config-file=config/mkdocs.en.yml"]
