# Tutorial Git rápido
Entrar a la aplicación de Git Bash y escribir lo siguiente
```
git config --global user.name "Rene Sandoval"
git config --global user.email "correo@gmail.com"
git config --global core.editor "code --wait"
git config --global color.ui true
git config --global core.autocrlf true
```
En caso de ser de Mac o Linux cambiar el último por ```git config --global core.autocrlf input```

**El correo debe ser el mismo que el que tenga en la cuenta de Github**. El nombre de usuario no tiene que ser el mismo

 ### Puede hacerse directamente en Visual Studio Code sin usar la terminal pero la recomiendo

# Explicación rápida de que es Git
En resumen git crea versiones de un proyecto para después subirlos. Ayuda a mantener un orden y trabajar en equipo.

Consta de 3 estados:
* Área de trabajo
* Stage
* Confirmardo

## Área de trabajo
Aquí es los cambios que hacemos en los archivos y guardamos. Los archivos aquí son los que no están listos aún. Una vez que está listo los subimos al Stage

## Stage
Aquí son archivos que sabemos que ya están listos para subirse al repositorio.

Si estamos usando varios archivos pero uno no queremos modificarlo más, lo ideal es subirlo al stage. Para ello se usa:

```git add archivo.txt``` <-- Un solo archivo

```git add archivo1.txt archivo2.txt archivo3.txt``` <-- Dos o más archivos

```git add .``` <-- Todos los archivos de la carpeta donde estemos

El stage es bueno ya que si por error modificamos un archivo que estaba listo, nos mostrará que el archivo fue modificado y no dejará confirmarlo hasta que lo volvamos a añadir.

Podemos ver el estado de los archivos con el comando ```git status``` y si queremos menos información se usa ```git status -s```

Para sacar un archivo de este estado usamos ```git restore archivo.txt```

## Confirmado
Aquí son archivos que sabemos que ya están listos para subirse al repositorio. Una vez confirmados no se debería volver atrás (aunque si es posible pero no recomendado). Para confirmar se usa el comando:

```git commit -m "Describir el cambio" ``` <-- Con esto todos los archivos del stage se confirman y debemos poner una descripción breve con -m. Si no ponemos descripción se nos abrirá Visual Studio Code para añadirlo ya que es obligatorio. Con commit **NO enviamos aún a este repositorio** pero cuando lo hagamos se subirán todos los commits hechos.

# Descargar este repositorio y subir los commits

Para clonar es bastante sencillo:

```git clone https://github.com/ReneSM127/Link-Art.git``` <-- Se descarga todo.

Ahora para subir los commits se usa:

```git push``` <-- La primera vez les pedirá que inicien sesión y después ya se subirán los cambios

Con ```git log``` y ```git log --oneline``` se pueden ver los detalles de los commits

Con ```git pull``` noos actualizará al último commit de la rama (sin tener que clonar de nuevo el repositorio)

# Ramas (brench)

Las ramas son basicamente versiones alternas del proyecto. Al trabajar sobre una rama especifica, los commits solo afectarán a esta rama y no de la rama padre.

```git branch``` <-- Mostrar las ramas actuales. **Si descargas el repositorio es probable que solo te aparezca la rama principal** para ver las demás se usa:

```git branch -a```

Para cambiar entre ramas usamos ```git switch nombre-rama```

Para crear una rama ```git branch nombre-nueva-rama```

El último comando crea una rama de donde la rama donde estemos. Se puede crear ramas de otras ramas

La utilidad de las ramas es trabajar en versiones alternas y cuando una versión funcione, fusionar esa rama con la rama padre.

Para subir la rama en este repositorio es con ```git push origin nombre-rama```

# Visual Studio Code

Podemos hacer todo lo anterior directamente en VSC sin necesidad de hacerlo en terminal. Es un poco más sencillo pero por terminal se tiene un control mejor.
