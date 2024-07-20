import styled from "styled-components";

interface IStylesTRProps {
  $isTHead?: boolean;
  $clickable?: boolean;
  $color?: "normal" | "primary" | "secondary";
}

const trStyle = {
  normal: "#ffffff",
  primary: "#f8fafc",
  secondary: "#f1f5f9",
};

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: "100%";
  text-align: left;

  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem;
  font-weight: 500;
  color: #334155;
`;

export const THead = styled.thead`
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  font-weight: 600;
  text-transform: uppercase;
  color: "#1e293b";
`;

export const Tr = styled.tr<IStylesTRProps>`
  ${(props) =>
    !props.$isTHead &&
    `
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    
    &:hover {
      background-color: rgb(226 232 240) /* #e2e8f0 */;
    }
  `}

  cursor: ${({ $clickable = false }) => $clickable && "pointer"};

  background-color: ${({ $color = "normal" }) => trStyle[$color]};
`;

export const Th = styled.th`
  padding-left: 1rem /* 16px */;
  padding-right: 1rem /* 16px */;
  padding-top: 0.75rem /* 12px */;
  padding-bottom: 0.75rem /* 12px */;
`;

export const TBody = styled.tbody``;

export const Td = styled.td`
  padding-left: 1rem /* 16px */;
  padding-right: 1rem /* 16px */;
  padding-top: 0.75rem /* 12px */;
  padding-bottom: 0.75rem /* 12px */;
`;

export const Centralize = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
