import { Footer } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Footer',
  component: Footer,
  args: {
    children: 'Guilherme Turri - 2023',
  }
}

export const Temaplete = (args: any) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  )
}