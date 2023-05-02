/*
    DAO
        Persona(Nombre,Apellido,Correo,Número de cédula,Edad,Teléfono)(asignar consultorio)
            Doctor (especialidad)(asignar como medico,asignar especialidad)
            Paciente ()(asignar como paciente(hora))
        Especialidad(Medicina general. Cardiología.Medicina interna,Dermatología.Rehabilitación física.Psicología.Odontología.Radiología.)
        Consultorio(lugar,estado)

    const medGeneral = new  Especialidad("Medicina general", "descripcion")
    const cirugia = new  Especialidad("Cirugia", "descripcion")
    const pablo = new Doctor("pablo","apellido"....)
    const cons201 = new Consultorio()

    pablo.setEspecialidad(medGeneral.getNombreEspecialidad)

    //metodo asignarMedicoConsultorio clase Doctor
    pablo.asignarMedicoConsultorio(cons201.asignarConsultorio())
    //metodo asignarMedicoConsultorio clase consultorio
    cons201.asignarMedico(pablo)

    //asignar consultorio de la clase consultorio
    asignarConsultorio(){
        consultorio.setEstado(false);
    }
    //verificar disponibilidad de la clase consultorio
    verificarDisponibilidad(){
        disponibilidad = consultorio.getEstado()
        return disponibilidad; //boolean
    }
*/