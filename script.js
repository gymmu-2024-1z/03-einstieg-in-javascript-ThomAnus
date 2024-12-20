import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]
    if (currentElement === "e") {
    } else if (currentElement === "E") {
    } else {
      // do nothing

      // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
      result.push(currentElement)
    }
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCase = currentElement.toUpperCase() //wir nehmen das aktuelle Zeichen und machen es groß

    result.push(upperCase)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "E") {
      count = count + 1 //wenn ein e ist dann +1
    } else {
    }
  }

  return count
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 1
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      count = count + 1
    }
  }

  return count
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  const result = []
  let count = 0
  {
    for (let i = 0; i < input.length; i++) constcurrentElement = input[i]

    if (currentElement >= "a" && currentElement <= "z") {
      count = count + 0
    } else if (currentElement >= "A" && currentElement <= "Z") {
      count = count + 1
    } else {
    }
  }

  return count
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (
      (currentElement >= "!" && currentElement <= "/") ||
      (currentElement >= ":" && currentElement <= "@") ||
      (currentElement >= "[" && currentElement <= "`") ||
      (currentElement >= "{" && currentElement <= "~") // sonderzeichen werden gelistet
    ) {
      count = count + 1
    }
  }

  return count >= 1
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  return input.includes("und") //falls "und" im text vorkommt, wird durch "return input "true" ausgegeben
}

linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      //wenn ein überprüfung dann === und nicht =
      result.push("3")
    } else if (currentElement === "E") {
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (input.length > 6) {
      return true
    } else {
      return false
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args.trim()
  const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
  return hexRegex.test(input)
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args
  return input.charCodeAt(0)
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      result = i
      break
    } else if (currentElement === "E") {
      result = i
      break
    }
  }

  return result
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  let result = 0

  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]

    if (currentElement === "e") {
      result = i
      break
    } else if (currentElement === "E") {
      result = i
      break
    }
  }

  return result
}

linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  let result = 0
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      count = count + 1
      if (count === 3) {
        result = i
        break
      }
    }
  }

  return result === 0 ? -1 : result
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      break
    }

    result.push(currentElement)
  }
  return result.join("") // text wird angezeigt
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const index = args.indexOf("$")
  if (index === -1) {
    return [args]
  }
  const firstPart = args.slice(0, index)
  const secondPart = args.slice(index + 1)
  return [firstPart, secondPart]
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      totalList.push(currentList.join(""))
      currentList.length = 0
    } else {
      currentList.push(currentElement)
    }
  }
  totalList.push(currentList.join(""))
  return totalList
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  const nameAndAge = aufgabe17(input)
  const result = []

  result.push("Sie heissen ")
  result.push(nameAndAge[0])
  result.push(" und sind ")
  result.push(nameAndAge[1])
  result.push(" Jahre alt")

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "." && nextElement === " ") {
    } else {
      return true
    }
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  for (let i = input.length - 1; i >= 0; i--) {
    //wir gehen von hinten nach vorne, indem wir mit dem -1 bei input.lenghth von hinten beginnen
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []
  let foundk = false //wir prüfen, ob k bereits gefunden wurde

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (foundk) {
      //falls k gefunden wurde, bleiben die Zeichen unverändert
      result.push(currentElement)
    } else if (ascii >= 32 && ascii <= 94) {
      //wir geben den ASCII-Wert von allen zahlen und sonderzeichen ausser "_", um es zu erkennen

      result.push("_")
    } else if (ascii >= 96 && ascii <= 106) {
      // wir geben den ASCII-Wert von einem Sonderzeichen und den Kleinbuchstaben  a bis j ein, um diese zu erkennen
      result.push("_")
    } else if (ascii >= 108 && ascii <= 126) {
      // wir geben den ASCII-Wert von den Kleinbuchstaben l bis z und Sonderzeichen ein, um diese zu erkennen
      result.push("_")
    } else if (ascii === 107) {
      // wir geben den ASCII-Wert von "k" ein, um diese zu erkennen
      result.push("k")
      foundk = true
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = []

  if (input.length > 0) {
    const firstElement = input[0]
    result.push(firstElement + firstElement) //das erste Zeichen wird verdoppelt

    for (let i = 1; i < input.length; i++) {
      const currentElement = input[i]
      result.push(currentElement)
    }
    result.push(firstElement) // das erste Zeichen wird wieder hinzugefügen
  }
  return result.join("")
  //füge das Zeichen am ende hinzu
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  if (input.length <= 1) {
    return input
    //falls die eingabe nur ein zeichen hat, bleibt es unverändert
  }
  const result = []

  const firstElement = input[0]
  const lastElement = input[input.length - 1] //das letzte Zeichen wird gespeichert und wir zählen von -1 ab

  result.push(lastElement) //das letzte Zeichen wird hinzugefügt

  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }

  result.push(firstElement)
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []
  const half = Math.floor(input.length / 2) //die Eingabe wird halbiert

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (input.length % 2 === 0 && (i === half || i === half - 1)) {
      //falls die Länge der Eingabe gerade ist, werden die beiden mittleren Zeichen gelöscht
    } else if (input.length % 2 !== 0 && i === half) {
      //falls die Länge der Eingabe ungerade ist, wird das mittlere Zeichen gelöscht
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function eigeneaufgabe1(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "1") {
      result.push("e")
      result.push("i")
      result.push("n")
      result.push("s")
      //wenn ein 1 gefunden wurde, werden die Zeichen e, i, n und s nacheinander in dieser reihenfolgehinzugefügt, weil man es nich mit ein wort ersetzen kann
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=eigeneaufgabe1]", eigeneaufgabe1)

export function eigeneaufgabe2(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (
      currentElement.charCodeAt(0) >= 97 &&
      currentElement.charCodeAt(0) <= 122
    ) {
      //wenn ein kleiner Buchstabe ist, wird vor ihm "average" hinzugefügt

      result.push("A")
      result.push("V")
      result.push("E")
      result.push("R")
      result.push("A")
      result.push("G")
      result.push("E")
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=eigeneaufgabe2]", eigeneaufgabe2)

export function selectionSort(args) {
  // Erstelle eine Kopie des Eingabearrays, um das Original zu bewahren
  const input = [...args]

  //Jedes Element in der Eingabe wird durchgegangen, ausser das Letzte (deshab das -1), da dieses am Schluss automatisch sortiert wird
  for (let i = 0; i < input.length - 1; i++) {
    //wir nehmen an, dass das aktuelle Element das kleinste ist
    let minIndex = i

    //hier wird das aktuelle (wie wir annhemen, kleinste) Element mit allen folgenden Elementen verglichen
    for (let j = i + 1; j < input.length; j++) {
      // Wenn dA kleineres Element gefunden wird, aktualisiere minIndex
      if (input[j] < input[minIndex]) {
        minIndex = j // minIndex zeigt nun auf das kleinere Element
      }
    }

    // Das Element an der Position i mit dem kleineren Element, das an minIndex gefunden wurde
    const temp = input[i] // Speichere das aktuelle Element in einer temporären Variablen
    input[i] = input[minIndex] // Setze das kleinere Element an die Position i
    input[minIndex] = temp // Setze das Element an der Position minIndex an die ursprüngliche Position von i
  }

  // Gib das sortierte Array zurück
  return input
}
linkupExerciseHandler("[data-click=selectionSort]", selectionSort)

export function bubbleSort(args) {
  // Sicherstellen dass die Eingabe eine Liste ist
  const text = args
  const list = text.split("") // erstellt eine Kopie vom Eingabearrays
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // Starte von vorne, wenn etwas vertauscht wurde
    }
  }
  const result = list.join("") // Konvertiert die sortierte Liste in einen String

  return result
}

linkupExerciseHandler("[data-click=BubbleSort]", bubbleSort)

export function countingSort(args) {
  const input = args
  const lookup = new Array(128).fill(0) // Erstellt ein Array mit 128 Elementen, um zu zählen wie oft ein Zeichen vorkommt (Lookup-Array)

  for (let i = 0; i < input.length; i++) {
    //geht durch alle Zeichen der Eingabe
    const currentElement = input[i] // das aktuelle Zeichen (also das current Element) wird verwendet
    const ascii = currentElement.charCodeAt(0) //wir nehmen dessen ASCII-Wert
    lookup[ascii] = lookup[ascii] + 1 //ergänzen dessen ASCII-Wert um 1
  }

  const result = [] //Neues Array, um die bereits sortierten Zahlen zu speichern.

  for (let i = 0; i < lookup.length; i++) {
    //schaut die Häufigkeit der ASCII-Wertes nach, um so zu sortieren
    const value = lookup[i] //holt den ASCII-Wert des Zeichens
    for (let j = 0; j < value; j++) {
      const character = String.fromCharCode(i) //der ASCII-Wert wird zurück in ein Zeichen umgewandelt
      result.push(character)
    }
  }
  return result.join("") //gibt den sortierten Array als String aus
}
linkupExerciseHandler("[data-click=CountingSort]", countingSort)
