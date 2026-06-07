const textArea = document.getElementById('evaluatedText');
        const wordCountDisplay = document.getElementById('wordCount');

        function countWords(text) {
            if (!text || text.trim() === '') return 0;
            const words = text.trim().split(/\s+/).filter(word => word.length > 0);
            return words.length;
        }

        function updateWordCount() {
            const wordCount = countWords(textArea.value);
            wordCountDisplay.textContent = wordCount;
        }

        textArea.addEventListener('input', updateWordCount);
        updateWordCount();
