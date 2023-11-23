import { Pipe, PipeTransform } from "@angular/core"

@Pipe({ name: 'converter'})

export class ConverterPipe implements PipeTransform {
    transform(number1, number2) {
        let n1 = parseInt(number1)
        let n2 = parseInt(number2)

        return "Result(Multiplication): " + (n1 * n2)
    }
}