import MountButton from "../MountButton";

type Props = {
  centralNumber: number;
  siblingCount: number;
  currentPage: number;
  onChange: (data: number) => void;
};

export default function SiblingMinor({
  centralNumber,
  siblingCount,
  currentPage,
  onChange,
}: Props): JSX.Element[] {
  const numerosRettorno: number[] = [];
  if (centralNumber - siblingCount <= 1) {
    for (let i = 1; i <= siblingCount + 1; i += 1) {
      numerosRettorno.push(i + 1);
    }
    const sorted = numerosRettorno.sort((a, b) => a - b);
    if (sorted[0] - 1 > 1) {
      sorted[0] = -1;
    }
    console.log({ minor: sorted });
    return MountButton({
      data: sorted,
      type: "Minor",
      currentPage,
      onChange,
    });
  }

  for (let i = 1; i <= siblingCount + 1; i += 1) {
    if (centralNumber - i !== 1) {
      numerosRettorno.push(centralNumber - i);
    }
  }
  const sorted = numerosRettorno.sort((a, b) => a - b);
  if (sorted[0] - 1 > 1) {
    sorted[0] = -1;
  }
  console.log({ minor: sorted });
  return MountButton({ data: sorted, type: "Minor", currentPage, onChange });
}
