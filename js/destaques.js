function showPopup(title, content, imageUrl) {
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupContent').innerText = content;
    document.getElementById('popupImage').src = imageUrl;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popupOverlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popupOverlay').style.display = 'none';
}
