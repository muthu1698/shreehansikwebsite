# Birth Calculator with Profile Picture Upload

## How to Use Profile Pictures

### Method 1: Using the Upload Page
1. Open `upload.html` in your browser
2. Click "Choose Profile Picture" or drag and drop an image
3. The image will be saved and displayed on the main page
4. Go back to `index.html` to see your profile picture

### Method 2: Manual Folder Upload
1. Place your profile pictures in the `images/profile/` folder
2. Supported formats: JPG, PNG, GIF
3. Maximum file size: 5MB
4. The application will automatically load images from this folder

### Folder Structure
```
Birth calculate/
├── index.html          # Main application
├── upload.html         # Upload page
├── script.js           # JavaScript logic
├── style.css           # Styling
├── images/
│   └── profile/        # Profile pictures folder
└── README.md           # This file
```

### Features
- ✅ Drag and drop upload
- ✅ Image preview
- ✅ File validation (type and size)
- ✅ Persistent storage using localStorage
- ✅ Responsive design
- ✅ Professional UI

### Tips
- Use square images for best results
- Recommended size: 200x200 pixels or larger
- The profile picture will be displayed as a circle
- Images are stored locally in your browser 