import React from 'react';
import { connect } from "react-redux";

class GameLogic extends React.Component {
    constructor(props) {
        super(props);
        // this.gameData = props.gameData;
        // this.gameObj = {};
    }

    getGame() {
        this.manageGameData();
        return this.gameObj;
    }

    manageGameData() {
        this.gameObj = {
            gameArray: [],
            boxObj: {},
            maxX: 0,
            maxY: 0,
            offsetX: 1000,
            offsetY: 1000,
            selected: null
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
        });

        // console.log(this.gameObj);
    }

    breakWords(props) {
        let arr = props.word.split('');
        arr = arr.map((item, index) => {
            const xPos = this.getIncrmentedValue(props, index, 'x');
            const yPos = this.getIncrmentedValue(props, index, 'y');
            const obj = {
                key: item,
                correct: false,
                x: xPos,
                y: yPos
            };
            this.maxXYPosition(xPos, yPos);
            if (typeof (this.gameObj.boxObj[`${obj.x}_${obj.y}`]) === 'undefined') {
                this.gameObj.boxObj[`${obj.x}_${obj.y}`] = [];
            }
            this.gameObj.boxObj[`${obj.x}_${obj.y}`].push({
                item,
                mainIndex: this.gameObj.gameArray.length,
                subIndex: index
            });
            // console.log(obj.x, obj.y, this.gameObj.boxObj[`${obj.x}_${obj.y}`]);
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

    render() {
        return (
            <div />
        );
      }
}

const mapStateToProps = (state) => {
    console.log('Logic', state);
  return {
    title: state.title
  };
}

export default connect(mapStateToProps)(GameLogic);