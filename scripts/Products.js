import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        const clickTargetData = clickTarget.dataset

        if (clickTargetData.type === "product") {
            window.alert(`${clickTargetData.name} costs \n$${(Math.round(clickTargetData.price * 100) / 100).toFixed(2)}`)
        }

    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product"
                    data-id="${product.id}"
                    data-name="${product.name}"
                    data-price="${product.price}"
                >${product.name}</li>`
    }

    html += "</ul>"

    return html
}

