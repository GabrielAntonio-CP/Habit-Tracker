# Habit Tracker (Aplicación Web Local)

## Descripción

Habit Tracker es una aplicación web ligera diseñada para el seguimiento de hábitos diarios. Funciona completamente en el navegador y no requiere conexión a internet, ya que utiliza almacenamiento local para guardar el progreso del usuario.

La aplicación incluye hábitos predefinidos que el usuario puede marcar como completados, permitiendo visualizar su avance de forma sencilla e intuitiva.

---

## Requisitos Funcionales

*  Hábitos predefinidos al iniciar la aplicación
*  Marcado de hábitos como completados
*  Cálculo y visualización del progreso
*  Persistencia de datos mediante **LocalStorage**
*  Funcionamiento completamente offline

---

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* LocalStorage (Web API)

---

## Estructura del proyecto

```
habit-tracker/
index.html      # Estructura principal de la aplicación
styles.css      # Estilos visuales
app.js          # Lógica y funcionamiento
README.md       # Documentación del proyecto
```

---

## Persistencia de datos

La aplicación utiliza **LocalStorage**, lo que permite:

* Guardar el progreso automáticamente
* Mantener los datos incluso al cerrar el navegador
* No depender de conexión a internet

---

## Validación de requisitos

| Requisito              | Estado     |
| ---------------------- | ---------- |
| Hábitos predefinidos   | ✔ Cumplido |
| Marcar hábitos         | ✔ Cumplido |
| Registro de progreso   | ✔ Cumplido |
| Almacenamiento local   | ✔ Cumplido |
| Funcionamiento offline | ✔ Cumplido |

---

## Posibles mejoras futuras

* Seguimiento por fechas (historial diario/semanal)
* Gráficas de progreso
* Personalización de hábitos
* Modo oscuro
* Exportación de datos
