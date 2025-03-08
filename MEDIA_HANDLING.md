# Handling Large Media Files

This document provides instructions on how to handle large media files in this project, particularly for deployment.

## Problem

GitHub has file size limitations (typically 100MB per file) which makes it difficult to include large media files like videos in your repository.

## Solution: Using Cloud Storage for Media Files

Instead of storing large media files directly in the repository, we use cloud storage services. Here's how to set it up:

### Step 1: Choose a Cloud Storage Provider

You can use any of these popular services:
- [Amazon S3](https://aws.amazon.com/s3/)
- [Google Cloud Storage](https://cloud.google.com/storage)
- [Microsoft Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/)
- [Cloudinary](https://cloudinary.com/) (specialized for media)
- [Bunny.net](https://bunny.net/) (optimized for video streaming)

### Step 2: Upload Your Media Files

1. Create an account with your chosen provider
2. Create a bucket/container for your media
3. Upload your large files (like module1.mp4)
4. Set appropriate permissions (usually public read access)
5. Get the URL for each uploaded file

### Step 3: Update References in Code

Replace local file paths with cloud URLs in your code:

```javascript
// Before
media: '/module1.mp4',

// After
media: 'https://your-cloud-storage-url.com/module1.mp4',
```

### Step 4: Add Large Files to .gitignore

Make sure large media files are in your .gitignore file:

```
# Large media files
public/module1.mp4
```

## Local Development

For local development, you can:

1. Keep a local copy of the media files in your public directory
2. Use environment variables to switch between local and cloud URLs based on environment

```javascript
// Example with environment variable
media: process.env.NODE_ENV === 'development' 
  ? '/module1.mp4' 
  : 'https://your-cloud-storage-url.com/module1.mp4',
```

## Recommended Services for Video Hosting

For videos specifically, consider these specialized services:
- [YouTube](https://www.youtube.com/) (with unlisted videos)
- [Vimeo](https://vimeo.com/)
- [Wistia](https://wistia.com/)
- [Mux](https://mux.com/)

These services provide optimized video delivery with adaptive streaming. 