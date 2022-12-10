import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const navbar = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    zIndex: 999,
  },

  variants: {
    kind: {
      sticky: {
        top: 0,
        right: 0,
        left: 0,
        position: 'sticky',
      },
      static: {
        position: 'static',
      },
      floating: {
        top: 0,
        right: 0,
        left: 0,
        position: 'sticky',
      },
    },
  },
})

export const container = style({
  backgroundColor: 'red',
  borderBottom: `1px solid black`,
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  height: '80px',
  width: '100%',
  padding: `0 24px`,

  selectors: {
    [`${navbar({ kind: 'floating' })} &`]: {
      marginTop: '0.75rem',
      marginRight: '0.75rem',
      marginLeft: '0.75rem',
      borderRadius: '0.75rem',
      borderBottom: 'none',
    },
  },
})
