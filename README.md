Coleccion de postman
https://documenter.getpostman.com/view/14677441/2s93CKNuEh

variables de entorno

export ARQ_DB_USER=root
export ARQ_DB_PASSWORD=123root
export ARQ_DB_NAME=CHALLENGE_TECNICO_TRANSACCIONES
export ARQ_DB_PORT=3306
export ARQ_DB_HOST=localhost
export ARQ_DB_TYPE=mariadb

token jwt = eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJub21icmUiOiJJc21hZWwgU3BhbGxldHRhIn0.VO_dxVmlwftz4K_jpMqKAdo8UYbCt-P0sZP9gZIWnDE

 agregue achivo dump para la base en el repo, con este comando lo clonas = mysqldump -u root -p CHALLENGE_TECNICO_TRANSACCIONES  < dumpTransacciones.sql

Comentarios:
  Dada la forma en que implemente las relacion de cada entidad a la hora de filtrar por fechas obtengo incongruencias si bien a nivel codigo agregue los    filtros a la hora de utilizarlos no genera correctamente los datos a la hora de obtener el reporte de porcentajes. Esto anterior tambien lo puedo consederar una limitacion
  
  Limitaciones: 
  La api fixerAPI se caia constantemente las pruebas manuales se hicieron tediosas
  
  Mejoras:
  Por un lado la arquitectura implementadad te permite agregar opciones a la hora de legir otra base de datos por lo tanto se pueden incluir bases        relacionales o no relacionales.
  Agregar test.
  Se puede mejorar el codigo para que sea mas escalable dada la supuesta implementacion en un sistema bancario.
  Agregar validaciones con respecto a el monto de las cuentas 
  Estandarizar una nomenclatura para los archivos asi no se ve un espanglish
  Refactorizar codigo , reducir la complejidad mejorar la legibilidad y la mantenibilidad del código al separar las responsabilidades en funciones más pequeñas
  Agregar inspect a la api para poder debbugear mas facil 
  Agregar logs en la api para saber hasta que instancia llego 
  Agregar swagger 
  
  En resumen : 
 
 En cuanto a la implementación de las relaciones entre las entidades y los filtros por fechas, es importante que se realice un análisis detallado para identificar las posibles incongruencias y solucionarlas. En general, en cualquier proyecto es importante tener un proceso de pruebas exhaustivo para detectar y corregir errores y limitaciones.

Respecto a la limitación de la API de Fixer, es importante tener en cuenta que cualquier servicio externo puede presentar problemas de disponibilidad o estabilidad. En este sentido, es recomendable tener un plan de contingencia o alternativas en caso de que un servicio no esté disponible.

En cuanto a las mejoras, es importante seguir trabajando en la escalabilidad del proyecto, y agregar pruebas y validaciones adicionales para garantizar su correcto funcionamiento. También es recomendable seguir mejorando el código para hacerlo más legible y mantenible en el tiempo.
  
  





 
