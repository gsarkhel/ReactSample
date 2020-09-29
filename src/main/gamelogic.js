export default class GameLogic {
    constructor(props) {
        this.gameData = props.gameData;
    }

    setGame() {
        this.manageGameData();
        return this.gameData.crosswords[0];
    }

    manageGameData() {
        this.gameArray = [];
        const obj = this.gameData.crosswords[0];

        let pushObj = {};
        obj.across.forEach((item, i) => {
            pushObj = {};
            Object.keys(item).forEach((j) => {
                pushObj[j] = item[j];
            });
            const type = 'across';
            pushObj.type = type;
            pushObj.completed = false;
            pushObj.wordSeq = this.breakWords({
                word: pushObj.word,
                x: pushObj.x,
                y: pushObj.y,
                type
            });
            this.gameArray.push(pushObj);
        });

        obj.down.forEach((item, i) => {
            pushObj = {};
            Object.keys(item).forEach((j) => {
                pushObj[j] = item[j];
            });
            const type = 'down';
            pushObj.type = type;
            pushObj.completed = false;
            pushObj.wordSeq = this.breakWords({
                word: pushObj.word,
                x: pushObj.x,
                y: pushObj.y,
                type
            });
            this.gameArray.push(pushObj);
        });

        console.log(this.gameArray);
    }

    breakWords(props) {
        let arr = props.word.split('');
        arr = arr.map((i, j) => ({ key: i, correct: false, x: this.getIncrmentedValue(props, j, 'x'), y: this.getIncrmentedValue(props, j, 'y') }));
        return arr;
    }

    getIncrmentedValue(props, num, varb) {
        let val = varb === 'x' ? props.x : props.y;
        if (varb === 'x' && props.type === 'across') {
            val += num;
        } else if (varb === 'y' && props.type === 'down') {
            val += num;
        }
        return val;
    }
}