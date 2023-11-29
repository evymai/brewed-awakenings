import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

document.addEventListener(
    "click",
    (clickEvent) => {
        const orders = getOrders()
        const itemClicked = clickEvent.target
        let productsSold = 0
        
        if (itemClicked.dataset.type === "employee") {
            for (const order of orders) {
                if (parseInt(itemClicked.dataset.id) === order.employeeId) {
                    productsSold ++
                }
            }
            window.alert(`${itemClicked.dataset.name} sold ${productsSold} product(s).`)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee"
                     data-id="${employee.id}"
                     data-name="${employee.name}"
                     data-rate="${employee.hourlyRate}"
                >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

