export default function CartItem({ title, price, image, quantity }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center border-b py-4">
  <img src={image} alt={title} className="w-24 h-24 object-cover rounded mx-auto sm:mx-0" />

  <div className="flex-1 text-center sm:text-left">
    <h4 className="font-semibold text-base sm:text-lg">{title}</h4>
    <p className="text-sm sm:text-base">Qty: {quantity}</p>
    <p className="text-primary font-bold text-base sm:text-lg">${price * quantity}</p>
  </div>
</div>

  )
}
