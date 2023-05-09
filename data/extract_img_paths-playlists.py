import os
import json

# Set the directory containing the images
image_directory = '../public/assets/images/playlists'

# Get a list of all image files in the directory
image_files = [f for f in os.listdir(image_directory) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif'))]

# Create the JSON object
playlist_images = {'playlistImages': []}

# Add each image file path to the JSON object
for index, image_file in enumerate(image_files, start=1):
    playlist_images['playlistImages'].append(
        {f'image{index}': f'/assets/images/playlists/{image_file}'}
    )

# Save the JSON object to a file
with open('playlist_images.json', 'w') as outfile:
    json.dump(playlist_images, outfile, indent=2)
