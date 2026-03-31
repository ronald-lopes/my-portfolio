interface TitleProps {
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
}

export const Title = (props: TitleProps) => {
  return (
    <div
      id={props.id}
      className={
        props.className || "my-16 flex flex-col items-center justify-center"
      }
    >
      <span
        className="
        text-sm sm:text-md text-muted"
      >
        {props.subtitle}
      </span>
      <h2
        className="
        text-2xl sm:text-4xl font-bold text-foreground"
      >
        {props.title}
      </h2>
    </div>
  );
};
