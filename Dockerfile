FROM python:3.12-bookworm AS base

LABEL org.opencontainers.image.source="https://github.com/privacyguides/privacyguides.org"

# Setup environment
ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONFAULTHANDLER=1

####################################################
# Stage: python-deps
# Install pipenv and compilation dependencies
####################################################
FROM base AS python-deps

# Install pipenv
RUN pip install --no-cache-dir pipenv

# Install build tools and libraries needed to compile any Python packages
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      gcc \
      libffi-dev \
      build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy Pipfile, Pipfile.lock, and any local modules needed for dependency resolution
COPY modules/mkdocs-material ./modules/mkdocs-material
COPY Pipfile .
COPY Pipfile.lock .

# Install all Python dependencies into a project‐local virtual environment at /.venv
RUN PIPENV_VENV_IN_PROJECT=1 pipenv install --deploy

####################################################
# Stage: runtime
# Install runtime dependencies and copy runtime artifacts
####################################################
FROM base AS runtime

# Install runtime packages (GTK/Cairo, image processing libraries, Git, etc.)
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      libcairo2-dev \
      libfreetype6-dev \
      git \
      libjpeg-dev \
      libpng-dev \
      openssh-client \
      pngquant \
      tini \
      zlib1g-dev \
      libffi-dev \
      bash \
      caddy \
    && rm -rf /var/lib/apt/lists/*

# Copy virtual environment and local mkdocs-material module from python-deps stage
COPY --from=python-deps /.venv /.venv
COPY --from=python-deps /modules/mkdocs-material /modules/mkdocs-material

# Ensure the virtual environment’s bin directory is first in PATH
ENV PATH="/.venv/bin:$PATH"

HEALTHCHECK NONE

# Entry point script and default cmd for running mkdocs
ENTRYPOINT ["/bin/bash"]
