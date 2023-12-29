export function getImageUrl(url) {
    var fileId = null;
  
  
    var match = /\/file\/d\/([a-zA-Z0-9_-]+)\/view/.exec(url);
    if (match && match[1]) {
        fileId = match[1];
    }

    return 'https://drive.google.com/uc?export=view&id=' + fileId;
}