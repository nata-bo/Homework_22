import PetRecord from "../PetRecord/PetRecord";

// eslint-disable-next-line import/no-anonymous-default-export
export default function():JSX.Element{
     const pets = [
    {
      id: 4,
      petName: "Puppy",
      additionalInfo: "Сute and playful puppy",
      displayInfo: true
    },
    {
      id: 5,
      petName: "Mouse",
      additionalInfo: "Runs very fast",
      displayInfo: false
    },
    {
      id: 6,
      petName: "Parrot",
      additionalInfo: "Can say \"Hello\"",
      displayInfo: true
    }
  ];

    return(
        <>
{pets.map(pet => (
        <PetRecord
        //key={pet.id}
        id={pet.id}
        petName={pet.petName}
        additionalInfo={pet.additionalInfo}
        displayInfo={pet.displayInfo}
        />
      ))}
        </>
    )
}