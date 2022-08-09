Feature: Es viernes?

  Scenario: Hoy no es viernes
  Given hoy es domingo
  When Pregunto si es viernes
  Then Responde "NO"