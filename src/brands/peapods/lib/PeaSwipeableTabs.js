import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';
import AutoSizer from 'react-virtualized-auto-sizer';

const PeaSwipeableTabs = ({
  tabIndex,
  tabs,
  onTabChange,
  enableFeedback,
  children,
  ...props
}) => {
  const [index, setIndex] = useState(tabIndex);
  const [fineIndex, setFineIndex] = useState(index);

  const indicatorRef = useRef(null);

  const getLeft = () => {
    const indicatorDOM = indicatorRef.current;
    if (!indicatorDOM) return {};
    const { clientWidth } = indicatorDOM;
    return { left: fineIndex * clientWidth };
  };

  const onChange = useCallback(
    i => {
      setIndex(i);
      setFineIndex(i);
      onTabChange(i);
    },
    [setIndex, setFineIndex, onTabChange],
  );

  const onSwitching = !enableFeedback
    ? undefined
    : (i, type) => {
        setFineIndex(i);
        if (type === 'end') {
          onChange(i);
        }
      };

  useEffect(onChange, [tabIndex]);

  return (
    <Grid
      container
      direction="column"
      {...props}
      style={{
        height: '100%',
      }}
    >
      <Grid
        item
        style={{
          width: '100%',
        }}
      >
        <Tabs
          variant={'fullWidth'}
          centered
          value={index}
          TabIndicatorProps={{
            ref: indicatorRef,
            style: {
              ...getLeft(),
              ...(index !== fineIndex && { transition: 'none' }),
            },
          }}
          onChange={(e, val) => onChange(val)}
        >
          {tabs.map(tab => (
            <Tab key={tab.label} disableRipple {...tab} />
          ))}
        </Tabs>
      </Grid>

      <Grid
        item
        style={{
          flex: 1,
        }}
      >
        <AutoSizer>
          {({ height, width }) => (
            <SwipeableViews
              style={{
                height,
                width,
              }}
              containerStyle={{
                height: '100%',
              }}
              slideStyle={{
                height: '100%',
                overflow: 'hidden',
              }}
              enableMouseEvents={enableFeedback}
              index={index}
              onSwitching={onSwitching}
            >
              {React.Children.map(children, (child, idx) => (
                <div
                  style={{
                    overflowY: 'auto',
                    height: 'calc(100% - 32px)',
                    minHeight: 'calc(100% - 32px)',
                    padding: 16,
                  }}
                  ref={tabs[idx].ref}
                >
                  {child}
                </div>
              ))}
            </SwipeableViews>
          )}
        </AutoSizer>
      </Grid>
    </Grid>
  );
};

PeaSwipeableTabs.propTypes = {
  tabIndex: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({ ref: PropTypes.func, label: PropTypes.node.isRequired }),
  ).isRequired,
  children: PropTypes.node.isRequired,
  // disable feedback to increase performance
  enableFeedback: PropTypes.bool,
  onTabChange: PropTypes.func,
};

PeaSwipeableTabs.defaultProps = {
  tabIndex: 0,
  enableFeedback: true,
  onTabChange: () => {},
};

PeaSwipeableTabs.metadata = {
  name: 'Pea Swipeable Tabs',
};

export default memo(PeaSwipeableTabs);
