type Props = {
  data: number[];
  type: string;
  currentPage: number;
  onChange: (data: number) => void;
}

export default function MountButton({data, type, currentPage, onChange}:Props): JSX.Element[] {
  const buttons: JSX.Element[] = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i] === -1) {
      buttons.push(
        <button data-type={type} type="button" className="button">
          ...
        </button>
      );
    } else {
      buttons.push(
        <button
          data-type={type}
          type="button"
          className={[data[i] === currentPage ? "selected" : "", "button"]
            .toString()
            .replace(",", " ")}
          onClick={() => onChange(data[i])}
        >
          {data[i]}
        </button>
      );
    }
  }
  return buttons;
}