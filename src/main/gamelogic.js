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
            gameBoxes: {}
        };
        const obj = this.gameData.crosswords[0];

        const dimen = 25;
        let pushObj = {};
        obj.across.forEach((item, i) => {
            pushObj = {};
            Object.keys(item).forEach((j) => {
                pushObj[j] = item[j];
            });
            const type = 'across';
            pushObj.type = type;
            pushObj.completed = false;
            pushObj.dimen = dimen;
            pushObj.wordSeq = this.breakWords({
                word: pushObj.word,
                x: pushObj.x,
                y: pushObj.y,
                i,
                dimen,
                type,
                gameBoxes: this.gameObj.gameBoxes
            });
            this.gameObj.gameArray.push(pushObj);
        });

        obj.down.forEach((item, i) => {
            pushObj = {};
            Object.keys(item).forEach((j) => {
                pushObj[j] = item[j];
            });
            const type = 'down';
            pushObj.type = type;
            pushObj.completed = false;
            pushObj.dimen = dimen;
            pushObj.wordSeq = this.breakWords({
                word: pushObj.word,
                x: pushObj.x,
                y: pushObj.y,
                i,
                dimen,
                type,
                gameBoxes: this.gameObj.gameBoxes
            });
            this.gameObj.gameArray.push(pushObj);
        });

        console.log(this.gameObj);
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
            obj.dimen = props.dimen;
            obj.left = obj.x * props.dimen;
            obj.top = obj.y * props.dimen;
            obj.width = props.dimen + 1;
            obj.height = props.dimen + 1;

            if (typeof (props.gameBoxes[`${obj.x}|${obj.y}`]) === 'undefined') {
                props.gameBoxes[`${obj.x}|${obj.y}`] = {};
                props.gameBoxes[`${obj.x}|${obj.y}`].ref = [];
            }
            props.gameBoxes[`${obj.x}|${obj.y}`].ref.push({
                clue: props.i,
                char: index
            });
            return obj;
        });
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