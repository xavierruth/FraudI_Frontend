import { Modal } from "./Modal";

interface RelatorioModalProps {
  isVisible: boolean;
  onClose: () => void;
  dados: Record<string, string>;
  children?: React.ReactNode;
}

export const RelatorioModal: React.FC<RelatorioModalProps> = ({
  isVisible,
  onClose,
  dados,
  children,
}) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <ul className="space-y-2">
        {Object.entries(dados).map(([key, value]) => (
          <li key={key}>
            <strong className="capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </strong>
            : {value}
          </li>
        ))}
        <li>
          <strong>Risco de Fraude Previsto:</strong> {children}
        </li>
      </ul>
    </Modal>
  );
};
