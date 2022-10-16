export default function factory() {
    const createUser = ({firstName, lastName, email}) => ({
        firstName,
        lastName,
        email,
        fullname:`${firstName} ${lastName}`,
        getFullName(){return `${this.fullname}` }
    })

    const pippo = createUser(({
        firstName: 'Pippo',
        lastName: 'Dogz',
        email: 'pippothadogz@gmail.com',
        birtheDate: 1995
    }))

    const pluto = createUser(({
        firstName: 'Pluto',
        lastName: 'nio',
        email: 'plutonio@gmail.com',
        birtheDate: 1996
    }))

    console.log({pippo, pluto});
    console.log(pippo.getFullName());
}