export default function validate(input) {
    let error = {}
    if (!input.name) {
        error.name = "El nombre es requerido"
    } else if (!/^[A-Za-z,.á-ú\s]{5,40}$/.test(input.name)) { error.name = "El nombre debe tener entre 5 y 40 caracteres que no sean números ni caracteres especiales" }


    else if (!input.heightMin) {
        error.heightMin = "Altura mínimo requerido"
    }


    else if (!input.heightMax) {
        error.heightMax = "Altura máximo requerido"
    }

    else if (!input.weightMin) {
        error.weightMin = "Peso mínimo requerido"
    }

    else if (!input.weightMax) {
        error.weightMax = "Peso máximo requerido"
    }

    else if (!input.life_span) {
        error.life_span = "Años de vida requerido"
    }

    else if (input.weightMin > input.weightMax) {
        error.peso = "El peso mínimo no puede ser mayor que el peso máximo"
    }

    else if (input.heightMin > input.heightMax) {
        error.altura = "La altura mínimo no puede ser mayor que la máximo"
    }

    if (input.weightMin < 0 || input.heightMin < 0 || input.lifeSpan < 0) {
        error.number = ""
    } else { error.number = "" }
    return error


}