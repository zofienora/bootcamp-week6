#!/usr/bin/env python3
"""
Background removal script for profile photo.
This script uses rembg library to automatically remove the background from an image.
"""

import sys
from PIL import Image
import io

try:
    from rembg import remove
except ImportError:
    print("Error: rembg library is not installed.")
    print("Please install it by running: pip install rembg")
    sys.exit(1)


def remove_background(input_path, output_path):
    """
    Remove background from an image and save the result.
    
    Args:
        input_path: Path to the input image file
        output_path: Path where the output image will be saved
    """
    try:
        # Read the input image
        with open(input_path, 'rb') as input_file:
            input_data = input_file.read()
        
        # Remove background
        print(f"Processing {input_path}...")
        output_data = remove(input_data)
        
        # Save the output
        with open(output_path, 'wb') as output_file:
            output_file.write(output_data)
        
        print(f"✓ Background removed successfully!")
        print(f"✓ Output saved to: {output_path}")
        
        # Display image info
        img = Image.open(io.BytesIO(output_data))
        print(f"✓ Output dimensions: {img.width} x {img.height}")
        
    except FileNotFoundError:
        print(f"Error: File '{input_path}' not found.")
        sys.exit(1)
    except Exception as e:
        print(f"Error processing image: {e}")
        sys.exit(1)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python remove_background.py <input_image> [output_image]")
        print("\nExample:")
        print("  python remove_background.py profile-photo.jpg profile-photo-no-bg.png")
        print("\nIf output_image is not specified, it will be saved as 'output.png'")
        sys.exit(1)
    
    input_path = sys.argv[1]
    output_path = sys.argv[2] if len(sys.argv) > 2 else "profile-photo-no-bg.png"
    
    # Ensure output is PNG (required for transparency)
    if not output_path.lower().endswith('.png'):
        output_path = output_path.rsplit('.', 1)[0] + '.png'
    
    remove_background(input_path, output_path)

