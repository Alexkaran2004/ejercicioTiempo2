let emojiData = [];

fetch('https://openmoji.org/data/openmoji.json')
    .then(response => response.json())
    .then(data => {
        emojiData = data;
        console.log('Datos de emojis cargados');
    })
    .catch(error => console.error('Error al cargar los datos de emojis:', error));

function loadEmoji() {
    let emojiCode = document.getElementById('emojiCode').value.toUpperCase();
    let resultDiv = document.getElementById('result');
    let emojiImage = document.getElementById('emojiImage');


    emojiCode = emojiCode.replace(/^U\+/, '').padStart(4, '0');

    let emojiInfo = emojiData.find(emoji => emoji.hexcode === emojiCode);

    if (emojiInfo) {
        let svgUrl = `https://openmoji.org/data/color/svg/${emojiCode}.svg`;

        emojiImage.src = svgUrl;
        emojiImage.style.display = 'block';
        emojiImage.alt = emojiInfo.annotation; 

        resultDiv.textContent = `Emoji cargado: ${emojiInfo.annotation}`;
    } else {
        resultDiv.textContent = 'Emoji no encontrado.';
        emojiImage.style.display = 'none';
    }
}

document.getElementById('emojiCode').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        loadEmoji();
    }
});
[
  {
    "emoji": "ðŸ˜€",
    "hexcode": "1F600",
    "group": "smileys-emotion",
    "subgroups": "face-smiling",
    "annotation": "grinning face",
    "tags": "face, grin",
    "openmoji_tags": "smile, happy",
    "openmoji_author": "Emily JÃ¤ger",
    "openmoji_date": "2018-04-18",
    "skintone": "",
    "skintone_combination": "",
    "skintone_base_emoji": "",
    "skintone_base_hexcode": "",
    "unicode": 1,
    "order": 1
  },
  {
    "emoji": "ðŸ˜ƒ",
    "hexcode": "1F603",
    "group": "smileys-emotion",
    "subgroups": "face-smiling",
    "annotation": "grinning face with big eyes",
    "tags": "face, mouth, open, smile",
    "openmoji_tags": "eyes, teeth",
    "openmoji_author": "Emily JÃ¤ger",
    "openmoji_date": "2018-04-18",
    "skintone": "",
    "skintone_combination": "",
    "skintone_base_emoji": "",
    "skintone_base_hexcode": "",
    "unicode": 0.6,
    "order": 2
  },
  {
    "emoji": "ðŸ˜„",
    "hexcode": "1F604",
    "group": "smileys-emotion",
    "subgroups": "face-smiling",
    "annotation": "grinning face with smiling eyes",
    "tags": "eye, face, mouth, open, smile",
    "openmoji_tags": "happy, teeth",
    "openmoji_author": "Emily JÃ¤ger",
    "openmoji_date": "2018-04-18",
    "skintone": "",
    "skintone_combination": "",
    "skintone_base_emoji": "",
    "skintone_base_hexcode": "",
    "unicode": 0.6,
    "order": 3
  },
  {
    "emoji": "ðŸ˜",
    "hexcode": "1F601",
    "group": "smileys-emotion",
    "subgroups": "face-smiling",
    "annotation": "beaming face with smiling eyes",
    "tags": "eye, face, grin, smile",
    "openmoji_tags": "happy, teeth, mouth",
    "openmoji_author": "Emily JÃ¤ger",
    "openmoji_date": "2018-04-18",
    "skintone": "",
    "skintone_combination": "",
    "skintone_base_emoji": "",
    "skintone_base_hexcode": "",
    "unicode": 0.6,
    "order": 4
  },
  

