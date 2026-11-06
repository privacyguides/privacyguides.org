# syntax=docker/dockerfile:1

FROM python:3.15-slim-bookworm

LABEL org.opencontainers.image.source="https://github.com/privacyguides/privacyguides.org"

# Environment configuration
ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONFAULTHANDLER=1 \
    UV_LINK_MODE=copy \
    UV_PYTHON_DOWNLOADS=0 \
    VIRTUAL_ENV=/opt/venv \
    PATH="/opt/venv/bin:$PATH"

# Install system libraries and development tools
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      bash \
      build-essential \
      caddy \
      curl \
      git \
      jq \
      libcairo2-dev \
      libffi-dev \
      libfreetype6-dev \
      libjpeg-dev \
      libpng-dev \
      openssh-client \
      pngquant \
      tini \
      zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest \
    /uv /uvx /usr/local/bin/

# Create virtual environment
RUN uv venv --python /usr/local/bin/python /opt/venv

# Install Python dependencies
COPY requirements.txt /tmp/requirements.txt

RUN --mount=type=cache,target=/root/.cache/uv \
    uv pip sync --python /opt/venv/bin/python \
    /tmp/requirements.txt

# Project directory
WORKDIR /workspaces/privacyguides.org

# Default command
CMD ["bash"]
