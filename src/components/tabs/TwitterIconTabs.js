import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Badge from '@material-ui/core/Badge';

const useTabsStyles = makeStyles(() => ({
  root: {
    width: '100%',
    borderBottom: '1px solid #E6ECF0',
  },
  indicator: {
    backgroundColor: '#1da1f2',
  },
}));

const useTabStyles = makeStyles(({ breakpoints }) => ({
  root: {
    minHeight: 53,
    minWidth: 80,
    [breakpoints.up('md')]: {
      minWidth: 120,
    },
    '&:hover': {
      '& .MuiTab-label': {
        color: '#1da1f2',
      },
    },
    '&$selected': {
      '& *': {
        color: '#1da1f2',
      },
    },
    '&.MuiTab--iconOnly': {
      '& .MuiTab-wrapper': {
        width: 'auto',
        padding: 8,
        borderRadius: 25,
        color: '#657786',
        '&:hover': {
          color: '#1da1f2',
          backgroundColor: 'rgba(29, 161, 242, 0.1)',
        },
      },
    },
  },
  textColorInherit: {
    opacity: 1,
  },
  wrapper: {
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 700,
    color: '#657786',
    '& svg, .material-icons': {
      fontSize: 26.25,
    },
  },
}));

const useBadgeStyles = makeStyles(({ palette }) => ({
  root: {
    [`&.MuiBadge--dotted, &.MuiBadge--number`]: {
      '& .MuiBadge-badge': {
        color: palette.common.white,
        backgroundColor: '#1da1f2',
      },
    },
    [`&.MuiBadge--dotted .MuiBadge-badge`]: {
      minWidth: 6,
      height: 6,
      top: 0,
      right: 4,
      padding: 0,
    },
    [`&.MuiBadge--number .MuiBadge-badge`]: {
      top: -4,
      right: 0,
      boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0.14rem',
      minWidth: 16,
      height: 16,
      fontSize: 10.7,
      fontWeight: 'bold',
    },
  },
  colorPrimary: {
    color: palette.common.white,
  },
}));

const TwitterIconTabs = ({
  tabs,
  tabProps: globalTabProps,
  badgeProps: globalBadgeProps,
  ...props
}) => {
  const tabsClasses = useTabsStyles(props);
  const tabClasses = useTabStyles(globalTabProps);
  const badgeClasses = useBadgeStyles(globalBadgeProps);
  return (
    <Tabs variant={'fullWidth'} {...props} classes={tabsClasses}>
      {tabs.map((tab, i) => {
        const { badgeProps, icon, ...tabProps } = tab;
        return (
          <Tab
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className={'MuiTab--iconOnly'}
            icon={icon}
            {...(badgeProps && {
              icon: (
                <Badge
                  className={
                    badgeProps.badgeContent === ''
                      ? 'MuiBadge--dotted'
                      : 'MuiBadge--number'
                  }
                  badgeContent={''}
                  invisible={false}
                  {...globalBadgeProps}
                  {...badgeProps}
                  classes={{
                    ...badgeClasses,
                    badge: cx(badgeClasses.badge, 'MuiBadge-badge'),
                  }}
                >
                  {icon}
                </Badge>
              ),
            })}
            disableRipple
            {...globalTabProps}
            {...tabProps}
            classes={{
              ...tabClasses,
              wrapper: cx(tabClasses.wrapper, 'MuiTab-wrapper'),
            }}
          />
        );
      })}
    </Tabs>
  );
};

TwitterIconTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
    }),
  ),
  tabProps: PropTypes.shape({}),
  badgeProps: PropTypes.shape({}),
};
TwitterIconTabs.defaultProps = {
  tabs: [],
  tabProps: {},
  badgeProps: {},
};

export default TwitterIconTabs;
