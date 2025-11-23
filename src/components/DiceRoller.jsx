export default function DiceRoller ({onRoll}) {

    const handleClick = () => {
        const number = Math.floor(Math.random() * 6) + 1;
        onRoll(number)

    };
    return (
        <div>
            <button onClick={handleClick}>Roll dice</button>
        </div>
    )

}