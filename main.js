var textarea = document.querySelector('#textarea');

textarea.addEventListener('keyup', ()=>{
    displaycharacters();
});

function displaycharacters(){
    
        var input = textarea.value;

        // CHARACTERS
        var charlen = input.replace(/\s+/g, '').length;
        var char = document.getElementById('character');
        char.textContent = charlen;

        // LETTERS
        var letterlen = input.replace(/[^a-zA-Z]/g, '').length;
        var letter = document.getElementById('letter');
        letter.textContent = letterlen;

        // SENTENCE
        var sentenceCount = input.split(/[.!?]+/).filter(function(sentence) {
            return sentence.trim().length > 0;
        }).length;
        var sentence = document.getElementById('sentences');
        sentence.textContent = sentenceCount;

        // WORDS
        var wordscount = input.split(' ').length-1;
        var words = document.getElementById('words');
        words.textContent = wordscount;
           
        // DIGITS
        var digitlen = input.replace(/[^0-9]/g, '').length;
        var digit = document.getElementById('digits');
        digit.textContent = digitlen;

        // SPACE
        var spaceCount = (input.match(/\s/g) || []).length;
        var space = document.getElementById('spaces');
        space.textContent = spaceCount;

        // PARAGRAPHS
        var paragraphs = input.split(/\n\s*\n/).filter(paragraph => paragraph.trim().length > 0);
        var paragraphCount = paragraphs.length;
        var paragraphElement = document.getElementById('paragraphs');
        paragraphElement.textContent = paragraphCount;

        // SPECIAL CHARACTERS
        var specialCharacters = input.match(/[^a-zA-Z0-9\s]/g) || [];
        var specialCharCount = specialCharacters.length;
        var specialCharElement = document.getElementById('special');
        specialCharElement.textContent = specialCharCount;

}