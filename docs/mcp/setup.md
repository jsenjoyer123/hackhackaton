---
title: MCP Setup
order: 2
---

# MCP Server Setup

This guide shows you how to install and configure the Diabase MCP server with different AI assistants.

## Quick Start with Claude Code

The fastest way to get started is with Claude Code. Run this single command:

```bash
claude mcp add --scope user diabase -- npx -y diabase-mcp
```

This registers the Diabase MCP server as a user-scoped tool in Claude Code. The `npx -y` flag downloads and runs the latest version of `diabase-mcp` from npm automatically. The server will start whenever Claude Code needs it and stop when the session ends.

After adding the server, you can immediately ask Claude to interact with your notes:

```
> Read my note at Projects/roadmap.md
> Search my vault for "API design"
> Create a daily note with today's tasks
```

## Claude Desktop

To use the Diabase MCP server with Claude Desktop, add it to your MCP configuration file.

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%/Claude/claude_desktop_config.json`
**Linux**: `~/.config/Claude/claude_desktop_config.json`

Add the following to the `mcpServers` section:

```json
{
  "mcpServers": {
    "diabase": {
      "command": "npx",
      "args": ["-y", "diabase-mcp"]
    }
  }
}
```

Restart Claude Desktop after saving the configuration.

## Cursor

To use with Cursor, add the Diabase MCP server to your Cursor MCP configuration. Open Cursor Settings, navigate to the MCP section, and add a new server:

```json
{
  "mcpServers": {
    "diabase": {
      "command": "npx",
      "args": ["-y", "diabase-mcp"]
    }
  }
}
```

Alternatively, create or edit `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "diabase": {
      "command": "npx",
      "args": ["-y", "diabase-mcp"]
    }
  }
}
```

## Windsurf

For Windsurf, add the server to your MCP configuration at `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "diabase": {
      "command": "npx",
      "args": ["-y", "diabase-mcp"]
    }
  }
}
```

## Running from Source

If you have cloned the Diabase repository and want to run the MCP server from source:

```bash
cd Diabase/mcp
npm install
node index.js
```

To use the source version with Claude Code:

```bash
claude mcp add --scope user diabase -- node /path/to/Diabase/mcp/index.js
```

## Specifying a Vault Path

By default, the MCP server auto-discovers your vaults from the Diabase desktop app's configuration file. If you want to point it at a specific vault directory instead, pass the path as a command-line argument:

```bash
# Run directly with a specific vault
node index.js /path/to/my-vault

# Or via npx
npx -y diabase-mcp /path/to/my-vault
```

To configure this in Claude Code:

```bash
claude mcp add --scope user diabase -- npx -y diabase-mcp /path/to/my-vault
```

Or in a JSON config file:

```json
{
  "mcpServers": {
    "diabase": {
      "command": "npx",
      "args": ["-y", "diabase-mcp", "/path/to/my-vault"]
    }
  }
}
```

## Vault Auto-Discovery

When no vault path is provided as a command-line argument, the server reads the Diabase configuration file to find your vaults. The config file is located at:

| Platform | Path |
|---|---|
| macOS | `~/Library/Application Support/Diabase/config.json` |
| Windows | `%APPDATA%/Diabase/config.json` |
| Linux | `~/.config/diabase/config.json` |

The configuration file contains a list of vaults with their names, paths, and IDs, along with the ID of the currently active vault. The server uses the active vault by default.

If the configuration file does not exist or contains no vaults, the server starts without a vault. You can then use the `set_vault_path` or `switch_vault` tools to configure a vault at runtime.

## Switching Vaults at Runtime

Even after the server starts, you can switch between vaults using the `switch_vault` tool:

```
> Switch to my "Work" vault
```

The AI assistant will call `switch_vault` with the vault name, and all subsequent operations will target the new vault. You can also use `list_vaults` to see all available vaults and `get_active_vault` to check which one is currently selected.

## Verifying the Connection

After setting up the MCP server, verify that it is working by asking your AI assistant to list your vaults:

```
> List my Diabase vaults
```

You should see a list of your vault names and paths. If you see an error, check that:

1. Node.js 18+ is installed and available in your PATH.
2. The Diabase desktop app has been opened at least once (to create the config file).
3. Your vault path exists and contains markdown files.

## Troubleshooting

### "No active vault" error

The server could not find a vault. Either the Diabase config file does not exist, or it does not contain any vaults. Solutions:

- Open the Diabase desktop app and create or open a vault.
- Pass a vault path explicitly: `npx -y diabase-mcp /path/to/vault`.
- Use the `set_vault_path` tool at runtime.

### Server does not start

Make sure `npx` is available in your PATH. Run `npx --version` in your terminal to verify. If `npx` is not found, install Node.js from [nodejs.org](https://nodejs.org/).

### Tools are not showing up

Some AI assistants cache the tool list. Restart the AI assistant or reload the MCP configuration. In Claude Code, run `claude mcp list` to verify that the `diabase` server is registered.
