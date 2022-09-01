export const Controls = ({ onForward, onBack, prevDisablet, nextDisablet }) => {
  return (
    <section>
      <button type="button" onClick={onBack} disabled={prevDisablet}>
        Назад
      </button>
      <button type="button" onClick={onForward} disabled={nextDisablet}>
        Вперед
      </button>
    </section>
  );
};
