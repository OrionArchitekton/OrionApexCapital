export function BtnPrimary(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;
  return <button className={`btn btn-primary ${className}`} {...rest} />;
}
export function BtnSecondary(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;
  return <button className={`btn btn-secondary ${className}`} {...rest} />;
}
export function BtnGhost(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;
  return <button className={`btn btn-ghost ${className}`} {...rest} />;
}
export function BtnDanger(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;
  return <button className={`btn btn-danger ${className}`} {...rest} />;
}
