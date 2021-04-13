const stepOne = document.getElementById('stepOne'),
    stepTwo = document.getElementById('stepTwo'),
    stepThree = document.getElementById('stepThree'),
    stepFour = document.getElementById('stepFour'),
    lineOne = document.getElementById('lineOne'),
    lineTwo = document.getElementById('lineTwo'),
    lineThree = document.getElementById('lineThree'),
    subLineOne = document.getElementById('subLineOne'),
    subLineTwo = document.getElementById('subLineTwo'),
    subLineThree = document.getElementById('subLineThree'),
    prevBtn = document.getElementById('prevBtn'),
    nextBtn = document.getElementById('nextBtn');




let counter = 1;

nextBtn.onclick = () => {

    counter++;
    changeColor();


}
prevBtn.onclick = () => {
    counter--;
    changeColor();


}






function changeColor() {
    if (counter > 4) {

        counter = 4;
    } else if (counter < 1) {

        counter = 1;
    } else if (counter === 1) {

        stepOne.style.borderColor = '#3498db';

        subLineOne.style.left = '-100% ';
        stepTwo.style.borderColor = '#e0e0e0';

        subLineTwo.style.left = '-100% ';
        stepThree.style.borderColor = '#e0e0e0';

        subLineThree.style.left = '-100% ';
        stepFour.style.borderColor = '#e0e0e0';

        nextBtn.style.backgroundColor = '#3498db';
        prevBtn.style.backgroundColor = '#e0e0e0';
        prevBtn.style.cursor = 'not-allowed';
        nextBtn.style.cursor = 'pointer';


    } else if (counter == 2) {

        subLineOne.style.left = '0 ';
        stepTwo.style.borderColor = '#3498db';

        subLineTwo.style.left = '-100% ';
        stepThree.style.borderColor = '#e0e0e0';

        subLineThree.style.left = '-100% ';
        stepFour.style.borderColor = '#e0e0e0';

        nextBtn.style.backgroundColor = '#3498db';
        prevBtn.style.backgroundColor = '#3498db';
        prevBtn.style.cursor = 'pointer';

    } else if (counter == 3) {

        subLineOne.style.left = '0 ';
        stepTwo.style.borderColor = '#3498db';

        subLineTwo.style.left = '0 ';
        stepThree.style.borderColor = '#3498db';

        subLineThree.style.left = '-100% ';
        stepFour.style.borderColor = '#e0e0e0';

        nextBtn.style.backgroundColor = '#3498db';
        prevBtn.style.backgroundColor = '#3498db';
        prevBtn.style.cursor = 'pointer';

    } else if (counter === 4) {

        subLineOne.style.left = '0 ';
        stepTwo.style.borderColor = '#3498db'

        subLineTwo.style.left = '0 ';
        stepThree.style.borderColor = '#3498db'

        subLineThree.style.left = '0 ';
        stepFour.style.borderColor = '#3498db'

        nextBtn.style.backgroundColor = '#e0e0e0';
        prevBtn.style.backgroundColor = '#3498db';
        nextBtn.style.cursor = 'not-allowed';
        prevBtn.style.cursor = 'pointer';

    }
}