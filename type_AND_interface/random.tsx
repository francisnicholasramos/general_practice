interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onShow: () => void // Use () => void for functions that don’t return anything.
}

type Props2 = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onShow: () => void // Use () => void for functions that don’t return anything. 
}
