# Cloud Sync & Saving

Systematically automatically saves your work to the cloud, so you can access your tokens from any device and never lose your work.

## How Cloud Sync Works

Systematically uses cloud storage to save your tokens securely. Your work is:
- **Automatically saved** - No need to remember to save
- **Stored securely** - Protected with your Google account
- **Synced across devices** - Access from anywhere
- **Backed up** - Your work is safe

### What Gets Saved

- **All pages** - Every page you create
- **All tokens** - All your TokenScript DSL code
- **Page organization** - Page names and order
- **Settings** - Your preferences (if applicable)

### What Doesn't Get Saved

- **Editor state** - Cursor position, selections
- **Temporary data** - Debug information
- **Browser cache** - Local browser data

## Automatic Saving

Systematically automatically saves your work as you type.

### How It Works

1. **You type** - Make changes in the editor
2. **Debounce delay** - Systematically waits 1 second after you stop typing
3. **Auto-save** - Your work is saved automatically
4. **Confirmation** - You may see a save indicator

### Save Indicators

Look for these indicators:
- **Save icon** - May appear when saving
- **"Saved" message** - Brief notification
- **Sync status** - Shows sync state

### When Saving Happens

Saving occurs:
- **After typing** - 1 second after you stop typing
- **After page changes** - When you create/rename/delete pages
- **Periodically** - Regular automatic saves

## Manual Save/Load

While automatic saving handles most cases, you can also manually save and load your work.

### Manual Save

If you want to ensure your work is saved:
1. Look for a **Save** button or menu option
2. Click to force an immediate save
3. Wait for confirmation

**Note**: Manual save is usually not necessary due to automatic saving.

### Loading Your Work

When you sign in:
1. Systematically automatically loads your saved work
2. All pages appear as you left them
3. All tokens are restored

### Loading from Another Device

1. **Sign in** - Use the same Google account
2. **Auto-load** - Your work loads automatically
3. **Verify** - Check that all pages and tokens are present

## Syncing Across Devices

Systematically syncs your work across all devices where you're signed in.

### How to Sync

1. **Sign in** - Use the same Google account on all devices
2. **Work on any device** - Make changes anywhere
3. **Automatic sync** - Changes sync automatically
4. **Access everywhere** - Your work is available on all devices

### Sync Behavior

- **Real-time** - Changes sync within seconds
- **Conflict resolution** - Last save wins (usually)
- **Offline support** - Changes sync when you reconnect

### Best Practices

- **Use one account** - Don't switch between accounts
- **Wait for sync** - Give it a moment after making changes
- **Check sync status** - Verify sync is working
- **Refresh if needed** - Refresh the page to see latest changes

## Account Management

### Signing In

1. **Click "Sign in with Google"**
2. **Select your Google account**
3. **Grant permissions** (if prompted)
4. **You're signed in!**

### Signing Out

1. **Look for account menu** - Usually in navigation
2. **Click "Sign out"**
3. **Confirm** - You'll be signed out

**Note**: Signing out doesn't delete your saved work. You can sign back in to access it.

### Account Settings

If available, you can:
- **View account info** - See your account details
- **Manage permissions** - Control what Systematically can access
- **Delete account** - Remove your account (if available)

**Warning**: Deleting your account may delete all saved work. Be careful!

## Troubleshooting

### Work Not Saving

**Symptoms**: Changes disappear after refresh

**Solutions**:
- Check you're signed in
- Look for error messages
- Verify internet connection
- Try manual save
- Refresh the page

### Work Not Loading

**Symptoms**: Pages or tokens missing

**Solutions**:
- Verify you're signed in with the correct account
- Check internet connection
- Refresh the page
- Clear browser cache (if needed)
- Contact support if persistent

### Sync Issues

**Symptoms**: Changes not appearing on other devices

**Solutions**:
- Wait a few seconds for sync
- Refresh the page
- Check you're signed in on both devices
- Verify same Google account
- Check internet connection

### Lost Work

**Symptoms**: Work disappeared

**Solutions**:
- Check if you're signed in with the correct account
- Look for pages in different locations
- Check if work was saved (look for save indicators)
- Contact support if work is truly lost

### Can't Sign In

**Symptoms**: Sign in button doesn't work

**Solutions**:
- Check internet connection
- Try a different browser
- Clear browser cache
- Disable browser extensions
- Contact support

## Best Practices

### Regular Backups

While automatic saving is reliable:
- **Export tokens** - Save copies of important tokens
- **Document decisions** - Keep notes on design choices
- **Version control** - Consider using version control for critical work

### Account Security

- **Use strong password** - Protect your Google account
- **Don't share account** - Keep your account private
- **Sign out on shared devices** - Always sign out on public computers

### Sync Management

- **Wait for sync** - Give sync time to complete
- **Check sync status** - Verify sync is working
- **One device at a time** - Avoid editing on multiple devices simultaneously

## Privacy & Security

### Data Storage

- **Encrypted** - Your data is encrypted in transit and at rest
- **Secure** - Protected by Google's security
- **Private** - Only you can access your tokens

### Data Usage

Systematically uses your data to:
- **Save your work** - Store your tokens
- **Sync across devices** - Keep your work available
- **Improve service** - Anonymous usage data (if applicable)

### Your Rights

You can:
- **Access your data** - View all your tokens
- **Delete your data** - Remove your tokens
- **Export your data** - Download your tokens
- **Control permissions** - Manage what TokenScript can access

## Next Steps

Now that you understand cloud sync:

1. **[Getting Started](../01-getting-started/02-quick-start-app.md)** - Learn the basics
2. **[Workflows](../05-integration/03-workflows.md)** - See real-world examples
3. **[Troubleshooting](../07-help/01-troubleshooting.md)** - Fix sync issues

---

**Tip**: Cloud sync makes Systematically powerful! You can work on your design system from anywhere, and your work is always safe. Just remember to sign in with the same Google account on all devices.

