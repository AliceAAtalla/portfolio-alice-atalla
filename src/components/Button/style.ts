import styled from 'styled-components'
import tokens from '@/styles/tokens'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e97777;
  border-radius: 24px;
  padding: 0.75rem;
  border: none;
  height: fit-content;
`

export const Text = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  width: max-content;
  margin-right: ${({ hasIcon }) => (hasIcon ? '0.5rem' : 0)};
  color: ${({ kind }) => (kind === 'primary' ? tokens.colorNeutralWhite : '')};
`
