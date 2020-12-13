export default class GameLogic {
    constructor(props) {
        this.gameData = props.gameData;
        this.gameObj = {};
    }

    getGame() {
        this.manageGameData();
        return this.gameObj;
    }

    manageGameData() {
        this.gameObj = {
            gameArray: [],
            maxX: 0,
            maxY: 0,
            offsetX: 1000,
            offsetY: 1000
        };
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
            this.gameObj.gameArray.push(pushObj);
            this.maxXYPosition(pushObj.x, pushObj.y);
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
            this.gameObj.gameArray.push(pushObj);
            this.maxXYPosition(pushObj.x, pushObj.y);
        });

        // console.log(this.gameObj);
    }

    breakWords(props) {
        let arr = props.word.split('');
        arr = arr.map((item, index) => {
            const obj = {
                key: item,
                correct: false,
                x: this.getIncrmentedValue(props, index, 'x'),
                y: this.getIncrmentedValue(props, index, 'y')
            };
            return obj;
        });
        return arr;
    }

    maxXYPosition(x, y) {
        if (this.gameObj.offsetX > x) {
            this.gameObj.offsetX = x;
        }
        
        if (this.gameObj.offsetY > y) {
            this.gameObj.offsetY = y;
        }

        if (this.gameObj.maxX < x) {
            this.gameObj.maxX = x;
        }
        
        if (this.gameObj.maxY < y) {
            this.gameObj.maxY = y;
        }
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