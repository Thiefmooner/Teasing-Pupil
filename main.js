auto.setMode("fast")
auto.waitFor()
toast("Script is running!")

function locate(bounds) {
    var X = bounds.centerX()
    var Y = bounds.centerY()
    p1 = [X + 100, Y - 50]
    p2 = [X - 100, Y]
    p3 = [X + 100, Y + 50]
    p4 = [X - 100, Y + 50]
}

function reduce() {
    gesture(50, p1, p2, p3)
    sleep(200)
}

function expand() {
    gesture(50, p2, p3, p4)
    sleep(200)
}

while (true) {
    sleep(50)
    var continueButton = text("继续").findOnce() || text("继续PK").findOnce() || text("再练一次").findOnce()
    if (continueButton) {
        continueButton.click()
        sleep(300)
    }

    var Mark = text("?").findOnce()
    if (Mark) {
        locate(Mark.bounds())
        type = Mark.indexInParent()
        parent = Mark.parent()
        if (type == 1) {
            if (!parent.child(0))
                continue
            num1 = parseFloat(parent.child(0).text())
            num2 = parseFloat(parent.child(2).text())
            if (num1 < num2)
                reduce()
            else
                expand()
        } else if (type == 3) {
            if (!parent.child(0))
                continue
            numA1 = parent.child(0).text()
            numA2 = parent.child(1).text()
            numB1 = parent.child(5).text()
            numB2 = parent.child(6).text()

            numA = numA1 / numA2
            numB = numB1 / numB2

            if (numA < numB)
                reduce()
            else
                expand()
        }
    }

}