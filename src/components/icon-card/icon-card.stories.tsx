import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Meta, StoryObj } from '@storybook/react';

import { CardIconName, IIconCard } from './icon-card.types';
import { IconCard } from './icon-card.component';

import { getRandomArrayItem } from '../../shared/utils';

const meta = {
  title: 'components/IconCard',
  component: IconCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bgColor: {
      control: 'color',
    },
    iconColor: {
      control: 'color',
    },
  },
} satisfies Meta<typeof IconCard>;
export default meta;

type Story = StoryObj<typeof meta>;

const commonProps: Omit<IIconCard, 'isClosed'> = {
  iconName: CardIconName.REACT,
  bgColor: '#dddddd',
  iconColor: '#646464',
  onClick: console.log,
};

export const Closed: Story = {
  args: {
    ...commonProps,
    isClosed: true,
  },
};

export const Opened: Story = {
  args: {
    ...commonProps,
    isClosed: false,
  },
};

const IconCardWithFeatures: React.FC<
  IIconCard & {
    autoSpin?: boolean;
    toggleOnClick?: boolean;
    randomizeIconEachRender?: boolean;
  }
> = ({
  autoSpin = false,
  toggleOnClick = false,
  randomizeIconEachRender = false,
  ...iconCardProps
}) => {
  const [isClosed, setIsClosed] = useState(iconCardProps.isClosed);
  const [iconName, setIconName] = useState(commonProps.iconName);

  const toggleClosed = useCallback(
    () => toggleOnClick && setIsClosed(prev => !prev),
    [toggleOnClick],
  );

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (autoSpin) {
      interval = setInterval(toggleClosed, 2500);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoSpin]);

  useEffect(() => {
    if (randomizeIconEachRender) {
      const randomIconName = getRandomArrayItem(Object.values(CardIconName))!;

      setIconName(randomIconName);
    }
  });

  return (
    <IconCard
      {...iconCardProps}
      isClosed={isClosed}
      iconName={iconName}
      onClick={toggleClosed}
    />
  );
};

export const ToggleOnClick: Story = {
  args: {
    ...commonProps,
    isClosed: false,
  },
  render: props => <IconCardWithFeatures {...props} toggleOnClick />,
};

export const LayoutDebugOpaqueBordered: Story = {
  args: {
    ...commonProps,
    isClosed: false,
  },
  render: props => {
    return (
      <ChildrenDebugLayout>
        <IconCardWithFeatures
          autoSpin
          toggleOnClick
          randomizeIconEachRender
          {...props}
        />
      </ChildrenDebugLayout>
    );
  },
};

const ChildrenDebugLayout = styled.div`
  * {
    outline: 1px dashed red;
    opacity: 0.9;
  }
`;
