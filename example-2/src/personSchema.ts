import { z } from "zod"

const personSchema = z.object({
  name: z.string(),
  age: z.string().transform((age) => Number(age)),
  email: z.string().email().nullable(),
})

const person = {
  name: "Bart",
  age: "10",
  email: "bart@simpsons.com"
}

// é para pegar a entrada dos dados
type PersonSchemaInput = z.input<typeof personSchema>

// pode ser usado .infer em vez de .output, é para pegar a saída dos dados
type PersonSchemaOutput = z.output<typeof personSchema> 

const { name, age, email } = personSchema.parse(person)

function createPerson(person: PersonSchemaInput) {
  console.log(person.name, person.age, person.email)
}

function showPerson(person: PersonSchemaOutput) {
  console.log(person.name, person.age)
}

function showPerson2(name, age, email) {
  console.log(name, age, email)
}

createPerson(person)
showPerson({ name: "Homer", age: 39, email: null })
showPerson2("Lisa", 8, null)