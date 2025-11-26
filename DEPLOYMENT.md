# Deployment Guide: GitHub Pages with Custom Domain

This guide explains how to deploy your TokenScript Docs site to GitHub Pages with a custom domain.

## Prerequisites

- A GitHub repository
- A custom domain name
- Access to your domain's DNS settings

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Configure Custom Domain

#### Option A: Using GitHub Settings (Recommended)

1. In **Settings** → **Pages**, scroll to **Custom domain**
2. Enter your custom domain (e.g., `docs.yourdomain.com` or `yourdomain.com`)
3. Check **Enforce HTTPS** (recommended)
4. GitHub will create a `CNAME` file automatically

#### Option B: Manual CNAME File

If you prefer to manage it manually, create a `CNAME` file in the `static/` directory:

```bash
echo "yourdomain.com" > static/CNAME
```

Or for a subdomain:
```bash
echo "docs.yourdomain.com" > static/CNAME
```

### 3. Configure DNS

Configure your domain's DNS records based on your setup:

#### For Apex Domain (yourdomain.com)

Add these A records pointing to GitHub Pages IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### For Subdomain (docs.yourdomain.com)

Add a CNAME record:
```
Type: CNAME
Name: docs (or @)
Value: yourusername.github.io
```

**Note:** Replace `yourusername` with your GitHub username or organization name.

### 4. Deploy

The GitHub Actions workflow will automatically deploy when you:

- Push to the `main` or `master` branch
- Manually trigger the workflow from the **Actions** tab

### 5. Verify Deployment

1. Wait a few minutes for DNS propagation (can take up to 48 hours)
2. Visit your custom domain
3. Check that HTTPS is working (GitHub provides free SSL certificates)

## Troubleshooting

### DNS Not Resolving

- Wait up to 48 hours for DNS propagation
- Use tools like `dig` or online DNS checkers to verify records
- Ensure DNS records are correct

### HTTPS Not Working

- Make sure **Enforce HTTPS** is enabled in GitHub Pages settings
- Wait for GitHub to provision the SSL certificate (can take up to 24 hours)
- Clear your browser cache

### Build Failures

- Check the **Actions** tab for build errors
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

## Manual Deployment

If you need to deploy manually:

```bash
npm run build
# Then upload the contents of the build/ directory to GitHub Pages
```

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)



