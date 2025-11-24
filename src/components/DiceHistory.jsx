export default function DiceHistory ({rolls}) {


    return (
        <div>
   <ul>
  {rolls.map((roll, index) => (
    <li key={index}>Roll {index + 1}: {roll}</li>
  ))}
</ul>
</div>

       
    )
}