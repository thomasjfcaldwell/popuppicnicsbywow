import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function TopComponent() {
	return (
		<Box>
			<nav aria-label='main mailbox folders'>
				<List sx={{ display: 'flex' }}>
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
		</Box>
	);
}
