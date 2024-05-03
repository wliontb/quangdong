<?php
namespace App\Services;

use Illuminate\Http\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class UploadFile
{
    public static function saveImage($file, $folder = 'images')
    {
        $path = $file->store($folder);
        return $path;
    }

    public static function removeImage($imagePath)
    {
        Storage::delete($imagePath);
        
        if (Storage::missing($imagePath)) {
            return true;
        } else {
            return false;
        }
    }

    public static function moveImagesToCloud($paths, $folder = 'images')
    {
        if (!empty($paths)) {
            $pathsArr = [];
            $imagePaths = Session::get('uploaded_files', []);
            foreach($paths as $key => $path) {
                $path = 'storage/' . $path;
                $file = new File($path);
                $cloudUrl = Storage::putFile($folder, $file);
                $pathsArr[] = $cloudUrl;
            }
            foreach($imagePaths[0] as $img) {
                Storage::delete('storage/' . $img);
            }
            Session::forget('uploaded_files');
            return $pathsArr;
        }
    }
}
