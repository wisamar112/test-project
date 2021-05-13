export default {
  "actions": {
    "goToRow": "Go to row ID",
    "refresh": {
      "hint": "Refresh the browser",
      "text": "Refresh"
    },
    "revive": {
      "hint": "Revive",
      "text": "Revive"
    }
  },
  "alerts": {
    "alert": "alert",
    "count": {
      "critical": "{{count}} critical",
      "minor": "{{count}} minor"
    },
    "eta": "({{delay}}min delay)",
    "ignoreAlert": "Remove from notifications list",
    "ignoreButton": "Ignore",
    "newAlert": "new {{severity}} alert",
    "noAlerts": "There are no notifications to show",
    "oldAlert": "{{severity}} alert",
    "onDuty": "In {{name}} duty",
    "sinceTime": "(Since {{time}})",
    "types": {
      "critical": "critical",
      "minor": "minor"
    }
  },
  "any": "Any",
  "batchDelete": {
    "message": "Are you sure want to delete these {{numberOfStops}} stops? They will be removed permanently.",
    "title": "DELETE STOPS"
  },
  "batchEdit": {
    "clearValues": "Clear values",
    "dialog": {
      "header": "Batch Edit",
      "headerStops": "Stop label",
      "hiddenStats": "Hidden stats"
    },
    "label": "label",
    "multipleValues": "Multiple values",
    "stopProperties": "stop properties",
    "stopsSelected": "stops selected",
    "timepoints": "Stops",
    "unableToEditMultipleValues": "Unable to edit multiple values",
    "value": "value"
  },
  "buttons": {
    "add": "Add",
    "addHere": "Add here",
    "addPassenger": "Add passenger",
    "add_deadhead_collapse_idle_trip_time": "Yes, add deadhead",
    "advancedView": "Expanded View",
    "apply": "Apply",
    "assign": "Assign",
    "back": "Back",
    "basicView": "Recommended View",
    "cancel": "Cancel",
    "close": "Close",
    "confirm": "Confirm",
    "continue": "Continue",
    "copy": "Copy",
    "copyTripForward": "Clone to next day",
    "delete": "Delete",
    "discard": "Discard",
    "discardPreferences": "Yes, close preferences",
    "discardWarn": "Yes, discard",
    "dontClosePreferences": "No, don’t close",
    "download": "Download",
    "dropHere": "Drop here",
    "edit": "Edit",
    "editLabel": "Edit labels",
    "export": "Export",
    "general_operation_collapse_idle_trip_time": "Continue",
    "generate": "Generate",
    "gotIt": "GOT IT",
    "group": "Group",
    "import": "Import",
    "link": "Link",
    "linkDuties": "Link Duties",
    "load": "Load",
    "merge": "Merge",
    "move": "Move",
    "move2newRow": "Move to new row",
    "move2stack": "Unassign",
    "move_collapse_idle_trip_time": "Yes, move trip(s)",
    "multiMove": "Move {{count}} trips",
    "next": "Next",
    "no": "No",
    "noDontAdd": "No, don't add",
    "noReset": "No, don't reset",
    "ok": "OK",
    "openLatest": "Open latest",
    "refresh": "Refresh",
    "remove": "Remove",
    "replace": "Replace",
    "reset": "Reset",
    "restore": "Restore",
    "restoreSettings": "Restore Settings",
    "revert": "Revert",
    "revertTip": "Revert local changes",
    "save": "Save",
    "saveAndClose": "Save & Close",
    "saveAs": "Save As",
    "saveChanges": "Save changes",
    "startUngroup": "Ungroup",
    "stopUngroup": "Cancel",
    "swapRightHand": "Swap from here",
    "swapSelected": "Swap",
    "swap_collapse_idle_trip_time": "Yes, swap trip(s)",
    "unLink": "Un-link",
    "upload": "Upload",
    "viewInTimeplan": "View in timeplan",
    "yes": "Yes",
    "yesAddStop": "Yes, add stop",
    "yesImport": "Yes, import file",
    "yesReset": "Yes, reset anyway"
  },
  "clearDate": "Clear date",
  "collapsable": {
    "close": "Close",
    "more": "More..."
  },
  "colorPicker": {
    "custom": "Custom",
    "recommended": "Recommended"
  },
  "conflicts": {
    "destination": "destination",
    "id": "ID",
    "metaHeader": "CONFLICTING CONFIGURATION TYPES",
    "metaSubtitle": "The destination project has {{count}} configuration types with the same name",
    "resolution": {
      "meta": {
        "dest": "Skip these configuration types",
        "part": "Let me decide for each configuration types",
        "source": "Replace the configuration types in the destination project"
      },
      "stops": {
        "dest": "Skip these stops",
        "part": "Let me decide for each stop",
        "source": "Replace the stops in the destination project"
      }
    },
    "source": "source",
    "stopsHeader": "CONFLICTING STOPS",
    "stopsSubtitle": "The destination project has {{count}} stops with the same stop ID"
  },
  "connectivity": {
    "notifications": {
      "errorModalTitle": "Schedule can't be synced with the timeplan",
      "errorPart1": "We're having trouble syncing this schedule with the ",
      "errorPart2": ". To get syncing again, send ",
      "errorPart3": " to ",
      "errorPart4": ". (You can stay in the schedule for now if needed.)",
      "failConvertValidationsPart1": "This schedule isn't synced with the timeplan because the timeplan has validation errors. To sync, fix the ",
      "failConvertValidationsPart2": " and ",
      "failConvertValidationsPart3": " the schedule. (You can stay in the schedule for now if needed.)",
      "filterUpdatedPart1": "The filter of ",
      "filterUpdatedPart2": " has been updated, please ",
      "filterUpdatedPart3": " the schedule",
      "learnMore": "Learn more",
      "lockedPart1": "This schedule isn't synced with the ",
      "lockedPart2": " because the schedule is locked. To sync, unlock the schedule and ",
      "lockedPart3": ". Or make a copy of the schedule.",
      "optimizationProgressPart1": "This schedule can't be synced with the ",
      "optimizationProgressPart2": " because it may interfere with the optimization. ",
      "optimizationProgressPart3": " when the optimization is completed.",
      "refresh": "refresh",
      "support": "support",
      "synced": "Synced ",
      "syncedDetails": "This schedule is synced with the ",
      "thisInfo": "this info",
      "timeplan": "timeplan",
      "tooltip": {
        "error": "Schedule can't be synced with timeplan right now. Contact support.",
        "failConvertValidations": "To sync schedule with timeplan, fix timeplan validation errors and refresh schedule",
        "locked": "To sync schedule with timeplan, unlock the schedule and refresh. Or copy the schedule.",
        "optimizationProgress": "To sync with the timeplan, refresh after the optimization is completed.",
        "sameVersion": "Schedule is synced with timeplan",
        "unsyncedWarning": "Sync schedule with timeplan."
      },
      "unsynced": "Unsynced ",
      "unsyncedWarningPart1": "The ",
      "unsyncedWarningPart2": " has been updated, please ",
      "unsyncedWarningPart3": " the schedule"
    }
  },
  "consistency": {
    "scheduleBroken": {
      "clickHere": "click here",
      "goToCopy": "Visit",
      "goToCopyText": "an 'unbroken' version of the schedule (including history)",
      "restore": "Restore",
      "saveCopy": "Copy",
      "saveCopyText": "the schedule (including history)",
      "scheduleVersionMismatch": "The schedule is not in the correct format.",
      "text1": "The schedule is no longer valid. Either:",
      "text2": "the schedule to its last valid version, or",
      "text3": "the schedule, by unassigning all invalid content",
      "toRestore": "to restore it",
      "tryToFix": "Attempt to fix",
      "weSavedIt": "To protect your data, we've automatically saved your last valid version"
    },
    "scheduleOutOfDate": {
      "pleaseRefresh": "Please refresh to see the changes",
      "thereWereChanges": "Someone made changes to this schedule"
    }
  },
  "copyTo": {
    "breadcrumbs": {
      "to": "TO:"
    },
    "description": {
      "rosterDatasets": "All linked schedules and timeplans will be copied as well",
      "rosterSchedule": "All linked schedules, datasets and roster datasets will be copied as well",
      "schedule": "The linked dataset will be copied as well"
    },
    "importRouteTitle": "Import Route",
    "importTitle": "Import Route",
    "noItemsToShow": "No items to show..",
    "preBreadcrumb": {
      "from": "FROM",
      "to": "TO"
    },
    "title": "COPYING: {{name}}",
    "toast": {
      "clickHere": "Click here",
      "errorMessage": "\"{{fileName}}\", and all its linked files could not be copied. Please try again.",
      "successMessage": "\"{{fileName}}\", along with its linked files, was copied successfully. To view it, {{{link}}}.",
      "title": "File was copied"
    }
  },
  "customStopFields": {
    "is_dead_segment": "Previous Segment Is Deadhead",
    "is_nwp": "Non Working Timepoint",
    "is_relief_point": "Relief Point",
    "naptanCode": "Naptan code",
    "type": "Timepoint"
  },
  "dash": "—",
  "dataset": {
    "schedules": {
      "edit": {
        "placeholderDescription": "Schedule Description",
        "placeholderName": "Schedule Name",
        "title": "Edit Schedule"
      },
      "folders": {
        "add": {
          "buttonTitle": "New Schedule",
          "placeholderDescription": "Schedule Folder Description",
          "placeholderName": "Schedule Folder Name",
          "title": "Create New Schedule Folder"
        },
        "edit": {
          "placeholderDescription": "Schedule Folder Description",
          "placeholderName": "Schedule Folder Name",
          "title": "Edit Schedule Folder"
        },
        "remove": {
          "notEmpty": "The schedule folder \"{{name}}\" is not empty. Would you like to delete it and all its contents?",
          "text": "Are you sure you want to delete schedule folder \"{{name}}\"?",
          "title2": "Delete a schedule folder"
        }
      },
      "importSchedule": "Import Schedule",
      "noSchedules": "No schedules to show",
      "remove": {
        "text": "Are you sure you want to delete schedule \"{{name}}\"?",
        "title2": "Delete a schedule"
      }
    }
  },
  "datasets": {
    "back": "Back",
    "divisionLabel": "Division",
    "edit": {
      "placeholderDescription": "Dataset Description",
      "placeholderName": "Dataset Name",
      "title": "Edit Dataset"
    },
    "filter": {
      "allowFilter": "Filter Result",
      "allServices": "All Service IDs and Groups",
      "button": "Import Data",
      "buttonExport": "Export Data",
      "editButton": "Apply",
      "editFilter": "Edit Filter",
      "keys": {
        "agency": "Agencies",
        "depot_code": "Depot code",
        "route": "Routes",
        "serviceIds": "Service IDs",
        "vehicleIds": "Block IDs",
        "vehicleType": "Vehicle Type"
      },
      "services": {
        "group": "Service Groups",
        "service_id": "Service IDs",
        "special": "Special Service IDs"
      },
      "title": "Select Data to Import",
      "titleExport": "Select Data to Export"
    },
    "folders": {
      "add": {
        "placeholderDescription": "Dataset Folder Description",
        "placeholderName": "Dataset Folder Name",
        "title": "Create New Dataset Folder"
      },
      "edit": {
        "placeholderDescription": "Dataset Folder Description",
        "placeholderName": "Dataset Folder Name",
        "title": "Edit Dataset Folder"
      },
      "remove": {
        "notEmpty": "The dataset folder \"{{name}}\" is not empty. Would you like to delete it and all its contents?",
        "text": "Are you sure you want to delete dataset folder \"{{name}}\"?",
        "title2": "Delete a dataset folder"
      }
    },
    "header": "Datasets",
    "headerLeft": "Open",
    "importDataset": "Import Dataset",
    "importFromWeb": "Import From Web",
    "noDatasets": "No datasets to show",
    "remove": {
      "text": "Are you sure you want to delete dataset \"{{name}}\"?",
      "title2": "Delete a dataset"
    },
    "rosteringHeader": "Roster Datasets"
  },
  "days": {
    "full": {
      "1": "Sunday",
      "2": "Monday",
      "3": "Tuesday",
      "4": "Wednesday",
      "5": "Thursday",
      "6": "Friday",
      "7": "Saturday",
      "all": "All"
    },
    "oneLetter": {
      "1": "S",
      "2": "M",
      "3": "T",
      "4": "W",
      "5": "T",
      "6": "F",
      "7": "S"
    },
    "short": {
      "1": "Sun",
      "2": "Mon",
      "3": "Tue",
      "4": "Wed",
      "5": "Thu",
      "6": "Fri",
      "7": "Sat"
    },
    "tiny": {
      "1": "Su",
      "2": "Mo",
      "3": "Tu",
      "4": "We",
      "5": "Th",
      "6": "Fr",
      "7": "Sa"
    }
  },
  "deadheadCatalog": {
    "cantDownload": "Too big to download",
    "download": "Download",
    "edit": {
      "placeholderDescription": "Catalog Description",
      "placeholderName": "Catalog Name",
      "title": "Edit Deadhead Catalog"
    },
    "header": "Catalogs",
    "implicit": "Implicit",
    "importCatalog": "Import Catalog",
    "importMessage": "Catalog \"{{name}}\" imported successfully.",
    "importMessageTitle": "Catalog imported",
    "longImport": {
      "cancelKey": "Cancel import",
      "message": "We have detected that you are importing a large catalog. This may take some time. Please, keep this tab open. You may continue working in another tab.",
      "title": "Large catalog detected"
    },
    "modal": {
      "message": "Are you sure you want to replace the catalog “{{catalog_name}}“? The new file will replace the existing one, and this may affect all schedules using the catalog.",
      "title": "Replace catalog"
    },
    "noCatalogs": "No catalogs to show",
    "properties": "Properties",
    "referenceCount": "Reference Count",
    "remove": {
      "text": "Are you sure you want to delete deadhead catalog \"{{name}}\"?",
      "title2": "Delete a deadhead catalog"
    },
    "replace": "Replace",
    "replaceMessage": "Catalog \"{{name}}\" replaced successfully.",
    "replaceMessageTitle": "Catalog replaced",
    "tooltips": {
      "download": "Download the catalog in Excel file",
      "replace": "Replace the catalog with a new one",
      "update": "Update the catalog trips and add new ones"
    },
    "tripCount": "Trip Count",
    "update": "Update",
    "updateMessage": "Catalog \"{{name}}\" updated successfully.",
    "updateMessageDetails": {
      "addedPlural": "1 trip was replaced and {{added}} new trips were added.",
      "bothPlural": "{{updated}} trips were replaced and {{added}} new trips were added.",
      "bothSingular": "1 trip was replaced and 1 new trip was added.",
      "replacedPlural": "{{updated}} trips were replaced and 1 new trip was added."
    },
    "updateMessageTitle": "Catalog updated"
  },
  "driver": {
    "contact": "contact"
  },
  "dutyComment": {
    "buttonAdd": "Add/edit comment",
    "placeholder": "Add a comment"
  },
  "email": {
    "forgot": {
      "subject": "Reset your password - Optibus",
      "text": {
        "button": "Reset your password",
        "p1": "Hello,",
        "p2": "We've received a request to reset your password. If you didn't make the request, please ignore this email.",
        "p3": "Otherwise, you can reset your password by clicking on the button below:",
        "p4": "If you have any questions or concerns, we'll be glad to help. Please contact our support team.",
        "p5": "Thanks,",
        "p6": "The Optibus team"
      }
    }
  },
  "errorModal": {
    "copy": "Copy to Clipboard",
    "copyFailure": "Error on trying to copy error text to clipboard",
    "copyTitle": "Copy raw error message to clipboard",
    "jiraTicket": "Create Jira Ticket",
    "jiraTicketTitle": "Open a new Jira bug"
  },
  "errors": {
    "admin": {
      "imageUpload": {
        "error": "Error uploading image",
        "message": "Image could not be uploaded. Please try again."
      }
    },
    "clearDuties": {
      "error": "Unable to clear duties",
      "message": "Duties could not be cleared. If you try again and still need help, contact support@optibus.com."
    },
    "clearReliefVehicles": {
      "error": "Unable to clear relief vehicles",
      "message": "Relief vehicles could not be cleared. If you try again and still need help, contact support@optibus.com."
    },
    "compactStack": {
      "error": "Unable to generate stack",
      "message": "The stack could not be created or ordered. If you try again and still need help, contact support@optibus.com."
    },
    "convertRoute": {
      "title": "Route conversion failed"
    },
    "copyTo": {
      "error": "Copy files failed",
      "message": "The copy process failed. Please try again."
    },
    "copyWithHistory": {
      "error": "Failed to save-as",
      "message": "The save-as process failed. If you try again and still need help, contact support@optibus.com."
    },
    "createStats": {
      "error": "Unable to analyze schedule",
      "message": "Stats could not be created. If you try again and still need help, contact support@optibus.com."
    },
    "customElements": {
      "create": {
        "error": "Custom element could not be created",
        "message": "There was an error creating a custom event"
      }
    },
    "dataset": {
      "schedules": {
        "edit": {
          "error": "Schedule could not be edited",
          "message": "The editing process failed. Please try again with a different configuration."
        },
        "folders": {
          "add": {
            "error": "New schedule folder could not be created",
            "message": "The creation process failed. Please try again with a different configuration."
          },
          "edit": {
            "error": "Schedule folder could not be edited",
            "message": "The editing process failed. Please try again with a different configuration."
          },
          "remove": {
            "error": "Schedule folder could not be deleted",
            "message": "The deletion process failed. Please try again with a different configuration."
          }
        },
        "remove": {
          "error": "Schedule could not be deleted",
          "message": "The deletion process failed. Please try again with a different configuration."
        },
        "upload": {
          "error": "Schedule could not be imported",
          "message": "The uploading process failed. Please try again with a different file."
        }
      }
    },
    "datasets": {
      "edit": {
        "error": "Dataset could not be edited",
        "message": "The editing process failed. Please try again with a different configuration."
      },
      "folders": {
        "add": {
          "error": "New dataset folder could not be created",
          "message": "The creation process failed. Please try again with a different configuration."
        },
        "edit": {
          "error": "Dataset folder could not be edited",
          "message": "The editing process failed. Please try again with a different configuration."
        },
        "remove": {
          "error": "Dataset folder could not be deleted",
          "message": "The deletion process failed. Please try again with a different configuration."
        }
      },
      "remove": {
        "error": "Dataset could not be deleted",
        "message": "The deletion process failed. Please try again with a different configuration."
      },
      "save": {
        "error": "Dataset could not be saved",
        "message": "The saving process failed. Please try again with a different configuration."
      },
      "upload": {
        "error": "Dataset could not be uploaded",
        "message": "The uploading process failed. Please try again with a different file."
      }
    },
    "deadheadCatalog": {
      "addToCatalog": {
        "matching": {
          "error": "Deadhead could not be added to the catalog",
          "message": "There was an error getting matching deadheads"
        },
        "saving": {
          "error": "Deadhead could not be save to the catalog",
          "message": "There was an error saving deadheads"
        }
      },
      "download": {
        "error": "Catalog could not be downloaded",
        "message": "The download process failed."
      },
      "import": {
        "error": "Catalog could not be imported",
        "message": "The import process failed. Please try again with a different file."
      },
      "remove": {
        "error": "Catalog could not be deleted",
        "message": "The deletion process failed"
      },
      "update": {
        "error": "Catalog could not be updated",
        "message": "The update process failed. Please try again with a different file."
      },
      "validations": {
        "columnNames": {
          "alignment": "Alignment",
          "days_of_week": "Days Of Week",
          "destination_stop_id": "Destination Stop Id",
          "direction": "Direction",
          "distance": "Distance",
          "end_time_range": "End Time Range",
          "origin_stop_id": "Origin Stop Id",
          "purpose": "Purpose",
          "purpose_and_direction": "Purpose, Direction",
          "speed": "Distance, Travel Time",
          "start_time_range": "Start Time Range",
          "travel_time": "Travel Time",
          "travel_time_and_distance": "Travel Time/Distance"
        },
        "dialogMsg": "Catalog \"{{catalogName}}\" could not be imported because {{errorCount}} issues were found with the file. Edit the catalog to fix the issues. Then import it again.",
        "types": {
          "combination_purpose_with_invalid_direction": "The direction must be left blank when the purpose is set to \"combination\"",
          "duplicated_trips": "This trip is also listed in row(s): {{rowIds}}",
          "inconsistent_alignment": "This trip is also listed in the following row(s) with varying values for alignment: {{rowIds}}",
          "invalid_alignment_value": "The alignment must be defined as either “Earliest”, “Latest”, or left blank if any alignment is acceptable",
          "invalid_days_of_week": "The Days of Week column must be defined as a numerical sequence (such as 2345) indicating which days each trip can take place (“1” for Sunday, “2” for Monday, etc.)",
          "invalid_direction": "The direction must be defined as \"from\" or \"to\" or left blank if any direction is acceptable",
          "invalid_time_range_format": "Time range must be written in HH:MM format",
          "missing_mandatory_field": "This column must be filled in",
          "not_a_distance": "Distance must be written as a decimal number (in {{unit}})",
          "speed_above_max": "Speed (distance divided by travel time) must be {{maxValue}}{{unit}} or less",
          "travel_time_above_max": "Travel time must be {{maxValue}} minutes or less",
          "travel_time_not_in_minutes": "Travel time must be a whole number, in minutes (e.g. no decimals)",
          "trips_overlap": "This trip is also listed in the following row(s) but the travel time and/or distance is different: {{rowIds}}"
        }
      }
    },
    "deletedSchedule": {
      "hint": "Click to undelete",
      "reason": "You are trying to access a deleted schedule"
    },
    "deletedTimeplan": {
      "hint": "Click to undelete",
      "reason": "You are trying to access a deleted timeplan"
    },
    "fixBroken": {
      "error": "Unable to fix schedule",
      "message": "The schedule could not be fixed. If you try again and still need help, contact support@optibus.com."
    },
    "folders": {
      "move": {
        "noSelection": "Nothing has been selected"
      }
    },
    "gantt": {
      "addAttendance": {
        "error": "Attendance could not be added",
        "message": "We weren't able to add an attendance. If you try again and still need help, contact support@optibus.com."
      },
      "addCustomElement": {
        "error": "Custom event could not be added",
        "message": "We weren't able to add a custom event. If you try again and still need help, contact support@optibus.com."
      },
      "addIdleTrip": {
        "error": "Deadhead could not be added",
        "message": "We weren't able to add a deadhead. If you try again and still need help, contact support@optibus.com."
      },
      "addLayover": {
        "error": "Layover could not be added",
        "message": "We weren't able to add a layover. If you try again and still need help, contact support@optibus.com."
      },
      "addPassenger": {
        "error": "Passenger could not be added",
        "message": "We weren't able to add a passenger. If you try again and still need help, contact support@optibus.com."
      },
      "addPostTrip": {
        "error": "Post-trip could not be added",
        "message": "We weren't able to add a post-trip. If you try again and still need help, contact support@optibus.com."
      },
      "addPreTrip": {
        "error": "Pre-trip could not be added",
        "message": "We weren't able to add a pre-trip. If you try again and still need help, contact support@optibus.com."
      },
      "addPublicTransportTrip": {
        "error": "Public transportation trip could not be added",
        "message": "We weren't able to add a public transportation trip. If you try again and still need help, contact support@optibus.com."
      },
      "addRechargeTrip": {
        "error": "Recharge event could not be added",
        "message": "We weren't able to add a recharge event. If you try again and still need help, contact support@optibus.com."
      },
      "addRefuelTrip": {
        "error": "Refuel event could not be added",
        "message": "We weren't able to add a refuel event. If you try again and still need help, contact support@optibus.com."
      },
      "addSignOff": {
        "error": "Sign-off could not be added",
        "message": "We weren't able to add a sign-off. If you try again and still need help, contact support@optibus.com."
      },
      "addSignOn": {
        "error": "Sign-on could not be added",
        "message": "We weren't able to add a sign-on. If you try again and still need help, contact support@optibus.com."
      },
      "addTaxiTrip": {
        "error": "Taxi trip could not be added",
        "message": "We weren't able to add a taxi trip. If you try again and still need help, contact support@optibus.com."
      },
      "addTravelTrip": {
        "error": "Travel trip could not be added",
        "message": "We weren't able to add a travel trip. If you try again and still need help, contact support@optibus.com."
      },
      "cantMoveMultiSelect": {
        "changeover": "Trips can't be reassigned because there is a changeover in the selection",
        "split": "Trips can't be reassigned because there is a split in the selection",
        "title": "Trips could not be moved"
      },
      "deleteCustomElement": {
        "error": "Custom event could not be deleted",
        "message": "We weren't able to delete the custom event. If you try again and still need help, contact support@optibus.com."
      },
      "editCustomElement": {
        "error": "Custom event could not be edited",
        "message": "We weren't able to edit the custom event. If you try again and still need help, contact support@optibus.com."
      },
      "editIdleTripTime": {
        "error": "Deadhead could not be edited",
        "message": "We weren't able to edit the deadhead. If you try again and still need help, contact support@optibus.com."
      },
      "editPostTrip": {
        "error": "Post-trip could not be edited",
        "message": "We weren't able to edit the post-trip. If you try again and still need help, contact support@optibus.com."
      },
      "editPreTrip": {
        "error": "Pre-trip could not be edited",
        "message": "We weren't able to edit the pre-trip. If you try again and still need help, contact support@optibus.com."
      },
      "editRechargeTime": {
        "error": "Recharge event could not be edited",
        "message": "We weren't able to edit the recharge event. If you try again and still need help, contact support@optibus.com."
      },
      "editRefuelTime": {
        "error": "Refuel event could not be edited",
        "message": "We weren't able to edit the refuel event. If you try again and still need help, contact support@optibus.com."
      },
      "editSignOff": {
        "error": "Sign-off could not be edited",
        "message": "We weren't able to edit the sign-off. If you try again and still need help, contact support@optibus.com."
      },
      "editSignOn": {
        "error": "Sign-on could not be edited",
        "message": "We weren't able to the sign-on. If you try again and still need help, contact support@optibus.com."
      },
      "editTaxiTime": {
        "error": "Taxi trip could not be edited",
        "message": "We weren't able to edit the taxi trip. If you try again and still need help, contact support@optibus.com."
      },
      "editTravelTrip": {
        "error": "Travel trip could not be edited",
        "message": "We weren't able to edit the travel trip. If you try again and still need help, contact support@optibus.com."
      },
      "editTripTime": {
        "error": "Trip could not be edited",
        "message": "We weren't able to edit the trip. If you try again and still need help, contact support@optibus.com."
      },
      "mergeIdles": {
        "error": "Deadheads could not be merged",
        "message": "We weren't able to merge the deadheads. If you try again and still need help, contact support@optibus.com."
      },
      "moveEvent": {
        "error": "Trip(s) could not be moved",
        "message": "We weren't able to move the trip(s). If you try again and still need help, contact support@optibus.com."
      },
      "moveSimultaneous": {
        "error": "Trips could not be assigned",
        "message": "We weren't able to assign the trips to the chosen vehicle and/or duty. If you try again and still need help, contact support@optibus.com."
      },
      "removeAttendance": {
        "error": "Attendance could not be deleted",
        "message": "We weren't able to delete the attendance. If you try again and still need help, contact support@optibus.com."
      },
      "removeIdleTrip": {
        "error": "Deadhead could not be deleted",
        "message": "We weren't able to delete the deadhead. If you try again and still need help, contact support@optibus.com."
      },
      "removeLayover": {
        "error": "Layover could not be deleted",
        "message": "We weren't able to delete the layover. If you try again and still need help, contact support@optibus.com."
      },
      "removePassengerFromTapt": {
        "error": "Taxi trip could not be deleted",
        "message": "We weren't able to delete the taxi trip. If you try again and still need help, contact support@optibus.com."
      },
      "removePostTrip": {
        "error": "Post-trip could not be deleted",
        "message": "We weren't able to delete the post-trip. If you try again and still need help, contact support@optibus.com."
      },
      "removePreTrip": {
        "error": "Pre-trip could not be deleted",
        "message": "We weren't able to delete the pre-trip. If you try again and still need help, contact support@optibus.com."
      },
      "removeRechargeTrip": {
        "error": "Recharge event could not be deleted",
        "message": "We weren't able to delete the recharge event. If you try again and still need help, contact support@optibus.com."
      },
      "removeRefuelTrip": {
        "error": "Refuel event could not be deleted",
        "message": "We weren't able to delete the refuel event. If you try again and still need help, contact support@optibus.com."
      },
      "removeSignOff": {
        "error": "Sign-off could not be deleted",
        "message": "We weren't able to delete the sign-off. If you try again and still need help, contact support@optibus.com."
      },
      "removeSignOn": {
        "error": "Sign-on could not be deleted",
        "message": "We weren't able to delete the sign-on. If you try again and still need help, contact support@optibus.com."
      },
      "removeTaxiTrip": {
        "error": "Taxi trip could not be deleted",
        "message": "We weren't able to delete the taxi trip. If you try again and still need help, contact support@optibus.com."
      },
      "removeTravelTrip": {
        "error": "Travel trip could not be deleted",
        "message": "We weren't able to delete the travel trip. If you try again and still need help, contact support@optibus.com."
      },
      "removeTrip": {
        "error": "Trip could not be deleted",
        "message": "We weren't able to delete the trip. If you try again and still need help, contact support@optibus.com."
      },
      "startEdit": {
        "error": "Schedule can't be edited",
        "message": "Something went wrong. If you try again and still need help, contact support@optibus.com."
      },
      "terminalModification": {
        "error": "Duty stops could not be changed",
        "message": "We weren't able to change the duty stops. If you try again and still need help, contact support@optibus.com."
      },
      "undo": {
        "error": "Undo action could not be completed",
        "message": "Something went wrong. If you try again and still need help, contact support@optibus.com."
      },
      "undoOnSaved": {
        "error": "Undo action could not be completed",
        "message": "Something went wrong. If you try again and still need help, contact support@optibus.com."
      }
    },
    "ganttCreation": {
      "cantLoad": {
        "error": "Schedule could not be loaded",
        "message": "Something went wrong while loading the schedule. If you try again and still need help, contact support@optibus.com."
      },
      "missingRouteForModifiedTrip": {
        "error": "Schedule could not be loaded",
        "message": "Schedule trip {{tripId}} could not be found in the dataset."
      },
      "missingTrip": {
        "error": "Schedule could not be loaded",
        "message": "Trip {{tripId}} could not be found in the dataset"
      }
    },
    "generateIds": {
      "error": "Unable to generate IDs",
      "message": "New IDs could not be generated. If you try again and still need help, contact support@optibus.com."
    },
    "illegalDZ": {
      "error": "Edit can't be performed",
      "message": "The attempted edit operation was not successful."
    },
    "importError": "Import error",
    "importRoute": {
      "error": "Route can't be imported",
      "message": "The route can't be imported right now. Please try again or contact support."
    },
    "jobs": {
      "error": "Task could not be removed",
      "message": "The deletion process failed. Please try again with a different configuration.",
      "missingId": "Missing Task ID",
      "missingResult": "Missing job result"
    },
    "manualEditing": {
      "deadhead": {
        "error": "Operation not allowed",
        "message": "Editing the location and time of a deadhead is not supported. Please make only one change at a time."
      }
    },
    "noConnection": {
      "hint": "Please check your internet connection",
      "reason": "Unable to connect"
    },
    "noResponse": {
      "hint": "Please try again in a minute",
      "reason": "Apologies for the inconvenience"
    },
    "onTimePopulateVehicles": {
      "error": "Unable to load on-time data",
      "message": "On-time data could not be loaded. If you try again and still need help, contact support@optibus.com."
    },
    "optimization": {
      "dialogMsg": {
        "plural": "The optimization could not be completed because there are {{issueCount}} issues related to your preferences that must be resolved first. View the issues below and resolve them. Then optimize again.",
        "singular": "The optimization could not be completed because there is 1 issue related to your preferences that must be resolved first. View the issues below and resolve them. Then optimize again."
      },
      "isPrefGroup": "pref. group",
      "tableHeaders": {
        "issues": "Issues",
        "preferences": "Preferences"
      },
      "title": "Optimization could not be completed",
      "troubleshootLink": "Troubleshoot"
    },
    "pageNotFound": {
      "error": "Page was not found - {{model}}",
      "message": "The page you were looking for is not here. Sorry."
    },
    "preferences": {
      "edit": {
        "error": "Preferences could not be edited",
        "message": "The editing process failed. Please try again with a different configuration."
      },
      "instance": {
        "edit": {
          "error": "Instance could not be edited",
          "message": "The editing process failed. Please try again with a different configuration."
        },
        "remove": {
          "error": "Instance could not be deleted",
          "message": "The deletion process failed. Please try again with a different configuration."
        }
      },
      "remove": {
        "error": "Preferences could not be deleted",
        "message": "The deletion process failed. Please try again with a different configuration."
      },
      "save": {
        "error": "Preferences could not be saved",
        "message": "The saving process failed. Please try again with a different configuration."
      }
    },
    "project": {
      "delete": {
        "error": "Project could not be deleted",
        "message": "The deletion process failed."
      },
      "duplicate": {
        "error": "Project could not be duplicated",
        "message": "The duplication process failed."
      }
    },
    "projectionError": "Projection error",
    "resetStats": {
      "error": "{{statName}} could not be reset"
    },
    "resourceNotFound": {
      "error": "Resource was not found",
      "message": "The resource you were looking for could not be found."
    },
    "restoreBroken": {
      "error": "Schedule could not be restored",
      "message": "The schedule could not be restored. Try discarding to return to the last version you saved."
    },
    "rosteringWizard": {
      "createError": "Error creating roster dataset",
      "daysNotFull": "Please assign a schedule to each of the services",
      "editError": "Error editing roster dataset",
      "illegalNumber": "Use a valid number",
      "limitMax": "Number of {{periodType}} must be between 1 and {{maxNumber}}",
      "scheduleError": "The following schedule is missing duty data: {{schedule}}",
      "services": "services",
      "weeks": "weeks"
    },
    "rosterSchedule": {
      "assignedToMultipleRosters": "Duty {{taskId}} is assigned to multiple roster lines on the same day",
      "duplicateDutyValidationFailed": {
        "message": {
          "plural": "The following duties are assigned to multiple roster lines on the same day. To continue, go to the affected roster lines to unassign the duplicate duties.",
          "singular": "The following duty is assigned to multiple roster lines on the same day. To continue, go to the affected roster lines to unassign the duplicate duty."
        },
        "title": "Duplicate duties detected"
      },
      "edit": {
        "error": "Roster schedule could not be edited",
        "message": "The editing process failed. Please try again with a different configuration."
      },
      "importAlreadyAssignedDuties": {
        "message": {
          "plural": "The file could not be imported because {{errorCount}} issues were found. Edit the file to fix the issues. Then import it again.",
          "singular": "The file could not be imported because 1 issue was found. Edit the file to fix this issue. Then import it again."
        },
        "title": "File could not be imported"
      },
      "importTooFewDays": {
        "message": "This file is for a roster with {{noOfImportedDays}} days, and your roster has {{noOfDsDays}} days. If you import, the excess days in your roster will be cleared of any duties or days off.",
        "title": "Import file?"
      },
      "importTooManyDays": {
        "message": "This file is for a roster with {{noOfImportedDays}} days, but your roster has only {{noOfDsDays}} days. Only the first {{noOfDsDays}} days in your file will be imported.",
        "title": "Import file?"
      },
      "importUndefinedTask": {
        "message": "The file includes at least one duty that does not exist in the roster. If you import, days that are assigned with such duties will be left empty. Import the file anyway?",
        "title": "Import file?"
      },
      "remove": {
        "error": "Roster schedule could not be deleted",
        "message": "The deletion process failed. Please try again with a different configuration."
      },
      "upload": {
        "error": "Roster schedule could not be imported",
        "message": "The uploading process failed. Please try again with a different file."
      }
    },
    "save": {
      "alreadyExists": "This name is already in use",
      "nameMandatory": "Name field is required",
      "noChange": "No changes have been made. "
    },
    "schedule": {
      "assignment": {
        "error": "Reassignment information could not be found",
        "message": "Reassignment information could not be found for the selected trip. Try a different trip."
      },
      "cantEdit": {
        "error": "Can't edit"
      },
      "completeElems": {
        "error": "The revision of events failed",
        "message": "The revision process failed. Please try again with a different configuration."
      },
      "convertWeekly": {
        "error": "Could not convert to weekly schedule",
        "message": "An error occurred while trying to convert to weekly schedule"
      },
      "dayChange": {
        "error": "Could not change service",
        "message": "An error occurred while switching between service IDs"
      },
      "discard": {
        "error": "Schedule could not be discarded",
        "message": "The discarding process failed."
      },
      "export": {
        "error": "Schedule could not be exported",
        "message": "An error occurred while exporting schedule."
      },
      "import": {
        "error": "Schedule could not be imported",
        "message": "An error occurred while importing schedule."
      },
      "optimization": {
        "error": "Optimization could not be completed",
        "message": "The optimization process failed. Please try again with a different configuration."
      },
      "order": {
        "error": "Could not move the row(s)",
        "message": "New order was not saved"
      },
      "save": {
        "error": "Schedule could not be saved",
        "message": "The saving process failed. Please try again with a different configuration."
      },
      "saveAs": {
        "error": "Schedule could not be saved",
        "message": "The saving process failed. Please try again with a different configuration."
      },
      "updateTrips": {
        "error": "Schedule's trips could not be updated",
        "message": "An error occurred while updating schedule trips."
      },
      "vehicleValidationBlock": {
        "error": "Vehicle block could not be validated",
        "message": "An error occurred while validating vehicle block."
      }
    },
    "scheduleRevisionMissing": {
      "error": "Schedule could not be found",
      "message": "There was an error loading the schedule. Please use the schedule history to attempt to restore the schedule."
    },
    "sessionError": {
      "buttonHint": "Session expired. Login to a new session",
      "message": "Your session has expired. Please log in to a new session to continue.",
      "title": "Unable to complete task"
    },
    "startEdit": {
      "error": "Schedule can't be edited",
      "message": "Something went wrong. If you try again and still need help, contact support@optibus.com."
    },
    "tableHeaders": {
      "column": "Column Name",
      "errorMessage": "Issue",
      "row": "Row"
    },
    "timeplan": {
      "createVV": {
        "error": "Vehicles-view could not be created",
        "message": "An error occurred while creating Vehicles-view."
      },
      "export": {
        "error": "Timeplan could not be exported",
        "message": "An error occurred while exporting timeplan."
      },
      "saveAs": {
        "error": "Timeplan could not be saved",
        "message": "The saving process failed. Please try again with a different configuration."
      },
      "upload": {
        "error": "Timeplan couldn't be imported"
      },
      "uploadData": {
        "error": "Data could not be uploaded",
        "message": "The uploading process failed. Please try again with a different file."
      },
      "uploadStops": {
        "error": "Stops could not be uploaded",
        "message": "The uploading process failed. Please try again with a different file."
      },
      "validate": {
        "error": "Timeplan could not be validated",
        "message": "There was an error and the validation process failed to run."
      }
    },
    "timetable": {
      "export": {
        "error": "Timetable could not be exported",
        "message": "An error occurred while exporting timetable."
      },
      "save": {
        "error": "Timetable could not be saved",
        "message": "The saving process failed. Please try again with a different configuration."
      },
      "upload": {
        "error": "Timetable could not be uploaded",
        "message": "The uploading process failed. Please try again with a different file."
      },
      "validate": {
        "error": "Validations could not be run on the timetable",
        "message": "There was an error and the validation process failed to run."
      }
    },
    "title": "Oops :(",
    "tripsOver72hours": {
      "error": "The schedule could not be loaded",
      "message": "The schedule contains a corrupt trip that causes the schedule to be over 72 hours. Please contact support for assistance."
    },
    "unknown": {
      "error": "Something went wrong",
      "message": "We are not sure what just happened, but if you send us the details, we'll do our best to fix it."
    },
    "unsupportedBrowser": {
      "error": "Unsupported browser",
      "message": "Please use Chrome in order to log into Optibus OnSchedule."
    },
    "validateError": {
      "error": "Validation could not be completed",
      "message": "Schedule could not be validated"
    }
  },
  "errorsSubTitles": {
    "detailed": "What?",
    "explanation": "Why?",
    "summary": "The Problem"
  },
  "euclidErrors": {
    "aborted": {
      "by_system": {
        "short_description": "Task was aborted by the system"
      },
      "by_user": {
        "short_description": "Task was aborted by user"
      },
      "short_description": "Task was aborted"
    },
    "assign_vehicles_warning": {
      "duty_piece_without_service_trips": {
        "short_description": "The vehicles can't be assigned because there are no service trips for the segment of duty {{duty_id}} that starts at {{start_time}} and ends at {{end_time}}. To continue, move the segment to the stack or delete it."
      }
    },
    "badData": {
      "empty_catalog": {
        "short_description": "The catalog \"{{filename}}\" was empty. Please add at least one trip or try again with a different file."
      },
      "no_roster_found": {
        "detailed_description": "The roster you selected is empty, please select a roster with at least 1 existing line.",
        "short_description": "No roster found"
      },
      "unmatched_roster_days": {
        "detailed_description": "The number of days in the roster you selected ({{sourceDays}}) does not match the number of days in your current roster, please select a roster with exactly ({{destDays}}) days in order to import.",
        "short_description": "Unmatched days"
      }
    },
    "cannotDeleteDataset": {
      "detailed_description": "The dataset and locked schedules were not deleted. Only the unlocked schedules in the dataset were deleted.",
      "short_description": "The dataset could not be deleted as it contains one or more locked schedules."
    },
    "cannotDeleteFolder": {
      "detailed_description": "The folder and locked schedules were not deleted. Only the unlocked schedules in the folder were deleted.",
      "short_description": "The folder could not be deleted as it contains one or more locked schedules."
    },
    "client_error": {
      "short_description": "Client error occurred"
    },
    "conflicting_global_constraints": {
      "header": "Global Constraints | {{preference_name}}",
      "message": "These global constraints conflict with each other. Make sure the minimum value (\"lower bound\") in \"{{contained_constraint}}\" is lower than the maximum value (\"upper bound\") in \"{{containing_constraint}}\""
    },
    "conflicting_preferences": {
      "deprecated_preference": {
        "short_description": "You are using both a phased out preference ({{deprecated_preference_names}}) and its replacement ({{new_preference_names}}), which can't be used simultaneously. Select one of them or contact support."
      },
      "non_deprecated_preference": {
        "short_description": "You are using both ({{non_deprecated_preference_names}}) and its replacement ({{new_preference_names}}), which cannot be used simultaneously. Adjust preferences accordingly or contact support@optibus.com for assistance."
      }
    },
    "connectivity_export_timeplan_2_ds": {
      "short_description": "This schedule isn't synced with the timeplan because the timeplan has validation errors. To see what the errors are, select Debug or go to the validation panels on the timeplan. To sync, fix the timeplan and refresh the schedule."
    },
    "connectivity_export_timeplan_2_ds_validations": {
      "short_description": "Some of the data you have entered in the timeplan is incorrect. Please go to the validation panels in the timeplan to find and fix those errors before syncing again"
    },
    "connectivity_inconsistent_schedule": {
      "short_description": "Schedule's service group {{scheduleName}} is inconsistent and prevents the schedule from syncing. To overcome this go to this service group and click attempt to fix or contact support."
    },
    "connectivity_projection_fail": {
      "short_description": "We're having trouble syncing the schedule with the timeplan. To get syncing again, send the details below to support."
    },
    "custom_code_warnings": {
      "syntax_warning": {
        "detailed_description": "Preference name: {{preference}}\nProperty name: {{property}}",
        "short_description": "A custom expression has syntax errors"
      }
    },
    "custom_execution_error": {
      "detailed_description": "Preference name: {{preference}}\nProperty name: {{property}}",
      "short_description": "An error occurred in the custom execution of {{preference}}"
    },
    "data_error": {
      "cannot_convert_service_to_days": {
        "short_description": "Service ID {{service_id}} can't be converted to days"
      },
      "cannot_determine_duties_type_repr": {
        "detailed_description": "{{duties_type}} has no value set in the 'duties_type_repr', which is the starting point for the duty ID generator",
        "short_description": "Error caused by ID generator - No duty type representation could be found for duty type {{duties_type}}"
      },
      "cannot_determine_vehicle_branch": {
        "detailed_description": "Vehicle starting depot {{depot}} and its first service trip {{trip}} doesn't have a branch",
        "short_description": "Error caused by ID generator - The branch for vehicle {{vehicle_block_id}} could not be determined"
      },
      "cannot_determine_vehicle_type_repr": {
        "detailed_description": "This vehicle type has no 'id_repr' attribute, and the duty ID generator was not started with 'vehicle_type_repr' for this vehicle type or family type",
        "short_description": "Error caused by ID generator -  The vehicle type ID representation could not be determined for vehicle type {{vehicle_type}}"
      },
      "can_not_create_route_for_tripless_pattern": {
        "short_description": "Could not create main pattern route for route ID: {{route_id}}"
      },
      "can_not_find_main_pattern": {
        "short_description": "A main pattern could not be found for the following routes: {{sign_direction_list}}. Please add a trip with the main pattern."
      },
      "combined_seed_and_duty_types_seed_digit": {
        "detailed_description": "Can't have both 'combined_seed' and 'duties_type_seed_digit' specified",
        "short_description": "Error caused by ID generator - There are contradicting properties for ID generation of duties"
      },
      "continuous_break_with_paid_time": {
        "short_description": "Continuous break time definition can't be defined with paid time, as we need the breaks in order to calculate the paid time"
      },
      "custom_expression_intentional_exception": {
        "short_description": "An issue was raised by the preference {{preference_name}}."
      },
      "data_set_missing_timeplan": {
        "explanation": "Data could not be exported because data-set is not based on timeplan",
        "short_description": "Failed to export 511 report"
      },
      "depot_selected_more_than_once": {
        "short_description": "This action couldn't be completed because {{stop_name}} was selected more than once in the Depot Setup preference. To continue, first go to the preference and make sure each depot is selected no more than once."
      },
      "duplicated_fare_and_category_ids": {
        "explanation": "Duplicate pairs of fair id and rider category id {{fare_category_ids}}",
        "short_description": "Failed to export 511 report"
      },
      "duplicated_reduced_name": {
        "detailed_description": " Reduced name is duplicated",
        "short_description": "VDS doesn't accept reduced names that are duplicated in any project.\nBy default, reduced names are the same as your stop IDs (though you can change the configuration).\nTo complete the export, download the stop catalog and make sure the stop IDs (or other values) listed below are unique and no longer than 6 characters. Then save and upload the catalog, and export again.\nThese are the IDs in {{project_name}} that need to be unique:\n{{stop_ids}}"
      },
      "duplicated_route_direction_pairs": {
        "explanation": "Some of the pairs of routes and directions appear more than once. Please check the following routes: {{route_ids}}",
        "short_description": "Failed to export Directions file for 511 report"
      },
      "duplicate_default_stage_key": {
        "detailed_description": "Duplicate preference type: {{duplicate_key}}",
        "short_description": "There is a duplicate preference type in algorithm_parameters {{default_stage_type}}"
      },
      "duty_grouping_key_pattern_error": {
        "detailed_description": "Valid values should contain: 'AM', 'PM', 'split', 'short' or 'full day'",
        "short_description": "Type can't be identified for duty ID:{{duty_id}} / duty type ID: {{duty_type_id}}"
      },
      "duty_missing_stretch_after_split_event": {
        "detailed_description": "This method is designed to check issues that caused bugs during the importing of duties (through Excel or JSON).",
        "short_description": "Duty {{container_id}} ends with a split, but is missing a stretch after it."
      },
      "duty_missing_stretch_before_split_event": {
        "detailed_description": "This method is designed to check issues that caused bugs during the importing of duties (through Excel or JSON)",
        "short_description": "Duty {{container_id}} starts with a split, but is missing a stretch before it."
      },
      "duty_type_wrong_time_definition": {
        "short_description": "The time definition with ID {{time_def_id}} for duty type {{duty_type_id}} could not be found"
      },
      "error_while_init_preference": {
        "short_description": "This action could not be completed because {{preference name}} preference was not properly define. Contact support@optibus.com for assistance"
      },
      "exceeding_reduced_name_length_limitation": {
        "detailed_description": "Reduced name is too long",
        "short_description": "VDS doesn't accept reduced names that are duplicated in any project.\nBy default, reduced names are the same as your stop IDs (though you can change the configuration).\n To complete the export, download the stop catalog and make sure the stop IDs (or other values) listed below are unique and no longer than 6 characters. Then save and upload the catalog, and export again."
      },
      "exporter_datasets_from_different_timeplans": {
        "detailed_description": "This report can't be exported because the datasets come from different timetables.\nTo export the report, select datasets that come from the same timetable.",
        "short_description": "Report can't be exported"
      },
      "exporter_data_alpanumeric_validation_error": {
        "detailed_description": "Data could not be exported because {{data_field}} must be letters and numbers only. Please check the following: {{data_list}}",
        "short_description": "Export failed due to invalid data format"
      },
      "exporter_data_exceed_limit_error": {
        "detailed_description": "Data could not be exported because {{data_field}} can't be more than {{data_limit}} characters. Please check the following: {{data_list}}",
        "short_description": "Export failed due to invalid data length"
      },
      "exporter_data_numeric_validation_error": {
        "detailed_description": "Data could not be exported because {{data_field}} must be numbers only. Please check the following: {{data_list}}",
        "short_description": "Export failed due to invalid data format"
      },
      "exporter_missing_data_error": {
        "detailed_description": "Data could not be exported because of the following {{data_type}} is missing {{data_field}}: {{data_list}}",
        "short_description": "Export failed due to missing data"
      },
      "exporter_missing_mandatory_settings": {
        "detailed_description": "Settings {{settings_names}} are mandatory but were missing from export request",
        "short_description": "Missing Mandatory Settings"
      },
      "exporter_missing_project_start_date_error": {
        "short_description": "Report could not be exported because the following projects are missing start dates: {{invalid_projects}}"
      },
      "exporter_name_limit_validation_error": {
        "short_description": "{{entity_name}} name limit is set to a maximum of {{name_limit}} characters. The export has failed due to the following names exceeding their limits: {{invalid_names}}"
      },
      "exporter_spider_duplicate_footnotes": {
        "detailed_description": "Data could not be exported because different definitions for the same footnote were found. To use the same footnote defintion, please remove excess definitions or ensure they are all exact duplicates. The following data was found: Footnote symbol: {{footnote_symbol}}. Note 1: {{note1}}, Note 2: {{note2}}.",
        "short_description": "Export failed due to invalid data definitions"
      },
      "exporter_spider_invalid_routes": {
        "detailed_description": "Some routes have validation errors in the timeplan.\nPlease fix the validation errors for the following routes and export again:\n{{routes}}",
        "short_description": "Can't export Spider Online due to route validation errors"
      },
      "exporter_spider_unsupported_day_codes": {
        "detailed_description": "To export to Spider Online, return to the Services menu in Step 2.\nChange your current service day selection in Row {{data_index}} ({{days_of_operation}}) to one of these options:\n{{supported_day_flags}}",
        "short_description": "You've selected service IDs/groups with service day combinations that Spider Online doesn't support"
      },
      "file_import": {
        "short_description": "Something went wrong while importing file {{file}}, row {{row}}"
      },
      "found_days_of_week": {
        "detailed_description": "Days of the week were found in {{found_in}}",
        "short_description": "Days of the week were found where they should not exist"
      },
      "id_with_dot": {
        "detailed_description": "Try replacing the '.' in the ID with a different character, such as '_'",
        "short_description": "{{term}} with ID {{id}} contains the character '.'"
      },
      "illegal_custom_expression": {
        "short_description": "A custom expression used in preference {{preference_name}} and property {{property}} is not allowed"
      },
      "illegal_service_id_defined_for_trip": {
        "explanation": "Service IDs {{service_ids}} were defined and are not part of the list of special service IDs for the current region",
        "short_description": "Trip ID {{trip_id}} has service ID configuration that is not allowed"
      },
      "import_roster_with_group_not_in_dataset": {
        "short_description": "Error in trying to import roster {{roster_id}} with roster group {{roster_group}}. Roster group {{roster_group}} is not part of roster group preferences."
      },
      "invalid_battery_type": {
        "short_description": "This action could not be completed because the selected battery in the {{pref_type}} preference is not one of the available batteries. Go to the Battery dropdown menu in the preference and select one of the following instead: {{battery_type_ids}}."
      },
      "invalid_charger_types": {
        "short_description": "This action could not be completed because the selected charger in the {{pref_type}} preference is not one of the available chargers. Go to the Charger dropdown menu in the preference and select one of the following instead: {{charger_types}}."
      },
      "invalid_direction_name": {
        "explanation": "The following routes direction name value is not valid. Please check the following: {{valid_directions}}\n\nValid values for routes are: {{valid_directions}}",
        "short_description": "Failed to export Directions file for 511 report"
      },
      "invalid_exporter_property": {
        "detailed_description": "Property value: {{property_value}}. Data source: {{data_source}}{}\nValid values are: {{valid_values}}.",
        "short_description": "Invalid property '{{property_name}}' for {{protocol}} export protocol"
      },
      "invalid_or_missing_property": {
        "detailed_description": "Property value: {{property_value}}. Data source: {{data_source}}",
        "short_description": "{{term}} {{item_id}} has a {{property_name}} property that is invalid or missing"
      },
      "invalid_profile_ids_for_charger_error": {
        "short_description": "This action could not be completed because the selected charging profiles in the \"{{pref_type}}\" preference is not one of the available profiles. Go to the Charging profile dropdown menu in the preference and select one of the following instead: {{available_profiles}}."
      },
      "invalid_timeplan_error": {
        "detailed_description": "Invalid timeplan encountered for the data set.\nPlease export a new data set from the relevant timeplan and try again.\nError Message: {{error_message}}",
        "short_description": "Invalid timeplan encountered for the data set."
      },
      "key_with_dot": {
        "detailed_description": "Consider replacing '.' characters with in the key with a different  character such as '_'",
        "short_description": "{{term}} with ID {{key}} contains the character '.'"
      },
      "locking_not_matching_global_constraints": {
        "detailed_description": "Quantity constraints in preference {{preference_name}} (of type {{preference_type}}) - {{parameter_name}} can't be satisfied because some rosters are locked",
        "short_description": "Quantity constraints can't be satisfied because some rosters are locked"
      },
      "mandatory_ev_preference_missing": {
        "short_description": "This action could not be completed because {{preference_type}} preference has not been defined. Make sure all the preferences in the Electric Vehicles category (Batteries, Chargers, Charging Profiles, Charging Stations) are defined."
      },
      "min_charging_time_bigger_than_maximum": {
        "short_description": "This action could not be completed because the minimum charging time defined in the {{pref_type}} preference exceeds the maximum charging time. Go to the preference and make sure the minimum is lower than the maximum."
      },
      "min_trips_infeasibility_error": {
        "short_description": "The minimum trip requirements can't be satisfied for route {{route}} at interval {{interval}}"
      },
      "missing_block_id": {
        "short_description": "The schedule can't be imported because trip {{trip_id}} is missing a block ID"
      },
      "missing_branch_for_depot": {
        "short_description": "The branch ID for depot {{depot_id}} is missing"
      },
      "missing_capacity_of_charger_types_in_location_error": {
        "detailed_description": "There are chargers that are missing capacities at location {{location_id}}",
        "short_description": "The configuration of {{preference_name}} is missing"
      },
      "missing_data_in_db": {
        "explanation": "The requested item is required to complete the operation. Make sure you are using a {{data_type}} that is part of your preferences",
        "short_description": "{{data_type}} with ID {{data_id}} could not be found"
      },
      "missing_direction_ogtfs": {
        "short_description": "There is no direction defined in trip {{trip_id}}"
      },
      "missing_distance_for_vehicle_block": {
        "short_description": "Vehicle block distance should have a non-negative value (and can't be left blank). Vehicle block: {{vehicle_block_id}}"
      },
      "missing_on_time_data": {
        "detailed_description": "On-time measurement data could not be found for trip ID {{trip_id}}",
        "short_description": "On-time measurement data could not be found"
      },
      "missing_required_gtfs_xlsx_sheet": {
        "short_description": "The required sheet {{filename}} is missing"
      },
      "missing_route_preference": {
        "short_description": "The {{preference_type}} preference for route {{route_id}} is missing"
      },
      "missing_route_service_code": {
        "short_description": "BODS could not be exported because some routes are missing a service code. Please set them with a service code and export again. Route and code: {{route_sign}} ({{route_code}})"
      },
      "missing_schedule_or_service_key": {
        "detailed_description": "The process failed while exporting invalid date preference structure. Please validate date: {{date}}. Expected keys are: dataset, schedule, service, version. Received: {{keys}}",
        "short_description": "Schedule mapping for VDV {{format}} could not be processed due to issue with date: {{date}}"
      },
      "missing_service_id_parameter": {
        "detailed_description": "To build a timetable, a service ID must be selected. Available service IDs: {{service_ids}}",
        "short_description": "A service ID parameter is missing"
      },
      "missing_service_id_transxchange": {
        "short_description": "Imported service \"{{service_id}\" could not be found"
      },
      "missing_sign_workbook": {
        "short_description": "The workbook for route {{sign}} is missing"
      },
      "missing_stop_times_departure_time": {
        "detailed_description": "This File could not be imported because the following trips are missing departure time in the stop_times.txt file. Please make sure all imported trips have arrival and departure time and import again: {{trip_ids}}",
        "short_description": "File could not be imported due to missing departure times"
      },
      "missing_timeplan_services_error": {
        "detailed_description": "None of the filtered services or service groups were found in the timeplan.\nPlease check the value selected for filtering.",
        "short_description": "Failed to create a timeplan."
      },
      "missing_vehicle_type": {
        "short_description": "This action could not be completed because there are costs per vehicle type in the Costs preference with no selected vehicle type. To continue, select a vehicle type."
      },
      "multiple_algo_params_as_custom_vehicle_preference": {
        "short_description": "The optimization could not be completed because something went wrong with the Custom Vehicle Preference. Contact support@optibus.com for assistance."
      },
      "multiple_stop_charging_location": {
        "detailed_description": "Stop: {{stop}}\nCharging locations: {{charging_locations}}",
        "short_description": "This action could not be completed because some stops are associated with more than one charging station. Go to the Charging Stations preference to change the stops and make sure no more than one of these charging stations is associated with each stop: {{charging_locations}}."
      },
      "negative_roster_times": {
        "short_description": "Standby times can't be negative. Standby event: {{standby_event}} Times: {{times}}"
      },
      "non_single_duties_group_with_dedicated_digit": {
        "detailed_description": "The duty ID generator was configured with dedicated digit {{digit}} for paired duty type {{duties_type}}. It should only be configured for non-paired duty types.",
        "short_description": "Error caused by ID generator - Only one duty group can have a specific ending digit assigned"
      },
      "non_terminal_taxis_for_relief_schedule": {
        "detailed_description": "Non-terminal taxis were found in the schedule. These taxis can't be optimized to be part of the relief schedule.\nIf you meant to optimize the only the terminal taxis, you can disable this message by adding the corresponding flag to the taxi schedule preference",
        "short_description": "Non-terminal taxis that won't be optimized as part of the relief vehicles optimization were found"
      },
      "not_supported_preference": {
        "short_description": "The {{preference_name}} preference is no longer usable. All information in this preference must be deleted"
      },
      "not_supported_preference_with_replacement": {
        "short_description": "The \"{{preference_name}}\" preference has been replaced with \"{{replacing_preference_name}}\" and is no longer usable. Delete this preference and begin using \"{{replacing_preference_name}}\" instead"
      },
      "no_available_group_id": {
        "detailed_description": "Range limit is {{limit}} and ID counter has already reached {{seed}}",
        "explanation": "This may happen because you do not have a seed length that is long enough for each group, which may happen, for instance, if you allocate too much capacity to one depot and too many duties are associated with the depot's branch",
        "short_description": "Error caused by ID generator - There are not enough available IDs for duties grouped by {{group_key}}"
      },
      "no_available_id_single_vehicle": {
        "detailed_description": "Vehicle {{vehicle_block_id}} has more than 10 duties",
        "short_description": "ID generator problem - This vehicle has more than 10 duties"
      },
      "no_default_group_in_roster_groups": {
        "short_description": "There must be either a default roster group or one named \"Untitled\""
      },
      "no_preferences": {
        "detailed_description": "A schedule must have preferences in order to perform the requested operation",
        "short_description": "No preferences have been defined for this schedule"
      },
      "no_relief_trips": {
        "detailed_description": "The optimization could not be completed because there are no relief car trips in the crew schedule, so a relief car schedule could not be created. To continue, make sure the preferences are set correctly. Then optimize the crew and relief car schedules again.",
        "short_description": "Optimization could not be completed"
      },
      "no_such_preference": {
        "short_description": "Preference type {{preference_type}} is not part of the defined preferences"
      },
      "null_preference": {
        "detailed_description": "You have an empty preference. Please remove it in order to perform the requested operation",
        "short_description": "There is an empty preference in the schedule"
      },
      "obsolete_roster_data_model_usage": {
        "short_description": "A preference you're using needs to be replaced. To get going again, please contact support@optibus.com."
      },
      "origin_and_destination_are_not_part_of_time_points": {
        "short_description": "Import from Transexchange – In creating sub-routes for route {{route_id}}, the {{stop_str}} stop is not part of the timepoints. Expected {{stop_str}} stop: {{expected}}, Actual {{stop_str}} stop: {{actual}}"
      },
      "overlapping_vehicle_type_groups": {
        "short_description": "The same vehicle type can't be defined in two different vehicle group hierarchies"
      },
      "override_add_mismatch": {
        "detailed_description": "Origin {{term}} is: {{origin_item}}\nExisting {{term}} is: {{existing_item}}",
        "short_description": "A {{term}} that was added to the origin schedule already exists in the target {{term.dataset}}, but with different properties"
      },
      "override_multiday_mismatch": {
        "short_description": "A {{term}} with ID {{item_id}} was added to different days with different properties"
      },
      "override_unsupported_modify": {
        "detailed_description": "Modified {{term}} ids:\n{{item_ids}}",
        "short_description": "{{term}} was modified in an update and is causing an error"
      },
      "pattern_display_name_too_long": {
        "explanation": "Pattern {{pattern_info}} has display name \"{{display_name}}\" which is longer than {{max_length}}",
        "short_description": "Pattern {{pattern_info}} has display name \"{{display_name}}\" which is longer than {{max_length}}"
      },
      "pattern_generator_cannot_generate_pattern_type": {
        "detailed_description": "The roster cycle '{{pattern}}' associated with the group '{{group_name}}' is of a type '{{pattern_type}}'. Roster cycle generation for this type is not supported. ",
        "short_description": "Generate roster cycle for cycle type '{{pattern_type}}' is not supported"
      },
      "pattern_generator_group_with_no_pattern": {
        "detailed_description": "Could not generate a roster cycle for the roster group '{{group_name}}'. The group is not associated with a roster cycle.",
        "short_description": "Could not generate a roster cycle for the roster group '{{group_name}}'. "
      },
      "pattern_generator_missing_group": {
        "detailed_description": "Could not find the group '{{group_id_or_name}}'.",
        "short_description": "Could not find the group '{{group_id_or_name}}'."
      },
      "pattern_generator_pattern_has_no_day_types": {
        "detailed_description": "Could not generate a roster cycle. The roster cycle '{{pattern}}' associated with the group '{{group_name}}' has no cycle segments, or all segments are 'Manual Only'. Roster cycle generation requires that cycle segments would be defined on the roster cycle preference",
        "short_description": "Could not generate a roster cycle. The roster cycle '{{pattern}}' associated with the group '{{group_name}}' has no cycle segments, or all segments are 'Manual Only'"
      },
      "pbs_duty_optimization_error": {
        "short_description": "The optimization could not be completed because the schedule would not be compatible with your preferences. Check your preferences and try again. If you still need help, contact support@optibus.com."
      },
      "post_trip_without_pull_in": {
        "short_description": "A post-trip without a following depot pull-in trip was found in container {{container_id}}"
      },
      "preference_duplicate_unique_property": {
        "short_description": "This action could not be completed because there are multiple {{instance_names}} defined in the {{pref_name}} preference with name “{{id}}”. Go to the preference and make sure each {{instance_name}} has a different name."
      },
      "pre_trip_without_pull_out": {
        "short_description": "A pre-trip without a preceding depot pull-out trip was found in container {{container_id}}"
      },
      "price_has_wrong_format": {
        "explanation": "Fare_ids and category ids have price that is not number {{price_format_category_fare_ids}}",
        "short_description": "Failed to export 511 report"
      },
      "projection_origin_schedule_inconsistent": {
        "detailed_description": "Go to the invalid schedule and click the \"attempt to fix\" link. If the link does not appear, go to preferences and click \"save & close\" - this will generate the link.",
        "short_description": "The schedule could not be imported because it is not valid. Go to the schedule and attempt to fix it. Then import the schedule again."
      },
      "refuel_duration_and_post_trip_as_refuel": {
        "short_description": "'refuel_duration' and 'end_of_day_post_trip_as_refuel' can't both be set simultaneously"
      },
      "regular_rider_category_missing_fare_id": {
        "explanation": "Rider category with value \"1\" has fare ids that is missing from the fare attribute file: {{missing_fare_ids}}",
        "short_description": "Failed to export 511 report"
      },
      "rider_category_missing_price": {
        "explanation": "Non regular rider category have not price: {{missing_price_category_ids}}",
        "short_description": "Failed to export 511 report"
      },
      "roster_multiple_grouping_key_error": {
        "detailed_description": "Hint: Check the Homogeneity preference\nTasks: {{roster}}\nGrouping Key: {{grouping_key}}",
        "short_description": "Roster {{roster_id}} has more than one grouping key"
      },
      "roster_schedule_with_duplicate_tasks": {
        "detailed_description": "{{error_string}}",
        "short_description": "The file could not be imported because one or more duties are assigned in multiple rows. View these duties below and edit the file. Then import again."
      },
      "roster_schedule_with_over_ten_duplicate_tasks": {
        "detailed_description": "{{error_string}}",
        "short_description": "The file could not be imported {{duplicate_count}} duties are assigned in multiple rows. View the first 10 of these duties below (there is a full list in raw error) and edit the file. Then Import again."
      },
      "roster_standby_overlap": {
        "short_description": "Standby times can't overlap. Overlap times: {{time}}, {{next_time}}"
      },
      "route_missing_direction": {
        "explanation": "The following routes are missing direction ID: {{route_ids}}",
        "short_description": "Failed to export Directions file for 511 report"
      },
      "same_battery_different_vehicles": {
        "short_description": "This action could not be completed because battery {{battery_type_id}} is associated with more than one vehicle type. Go to the Electric Vehicle Types preference and make sure no more than one electric vehicle types is associated with each battery"
      },
      "schedule_with_trip_exceeded_max_hours": {
        "detailed_description": "The schedule can't be imported because there's at least one event that arrives 36 hours or more after the day on which the event began.\n Please update the times for the following events:\n {{trips}} \n Note that Excel may convert your time data to a 24-hour clock even if the departure or arrival time is more than 24 hours after the day on which the event began.",
        "short_description": "One or more events arrive 36 hours or more after the day on which the event began."
      },
      "schema_error": {
        "explanation": "This action could not be completed because something went wrong with the way the {{preference_name}} preference has been defined. Contact support@optibus.com for assistance.",
        "short_description": "This action could not be completed because {{preference_name}} does not match the preference schema. Contact support@optibus.com for assistance."
      },
      "short_route_infeasibility_error": {
        "short_description": "Short route {{short_route}} requirements can't be satisfied"
      },
      "standby_times_are_invalid": {
        "short_description": "Standby times are not in range. Standby event: {{task}}. Times: {{times}}"
      },
      "sub_trip_not_found_error": {
        "detailed_description": "This trip was supposed to have sub-trip {{from}} --> {{to}} (Stop sequence: {{sequence}}, route ID: {{route_id}})",
        "short_description": "Sub-trip #{{sub_trip_idx}} was not found for trip {{trip_id}}"
      },
      "time_table_overlapping_time_format": {
        "detailed_description": "The intervals {{first}} and {{second}} overlap in preference {{preference}}",
        "short_description": "Two intervals in preference {{preference}} overlap"
      },
      "too_many_directions": {
        "short_description": "Route {{sign}} currently has more than 2 directions ({{directions}}), which is unsupported"
      },
      "travel_times_interval_parsing_error": {
        "detailed_description": "Service ID: {{service_id}}, Route: {{sign_code}}, Interval: {{interval}}",
        "short_description": "An interval string is invalid"
      },
      "travel_times_overlapping_intervals": {
        "detailed_description": "Service ID: {{service_id}}, Route ID: {{route_id}}, First interval: {{first_interval}}, Second interval: {{second_interval}}",
        "short_description": "Two intervals in running times overlap"
      },
      "trip_departure_travel_time_isnt_zero": {
        "detailed_description": "In the running times {{travel_times}} for route {{route}}, the travel time for the departure timepoint ({{time_point}}) is not 0, as entered",
        "short_description": "The travel time for trip departure timepoint is not 0, as entered"
      },
      "trip_without_vehicle_type": {
        "short_description": "The vehicle type for trip {{trip_id}} could not be found"
      },
      "trip_without_vehicle_types": {
        "short_description": "There are no vehicle type(s) for trip {{trip}}"
      },
      "txc_schema_validation_failed": {
        "explanation": "The output XML file failed to follow the TXC 2.4 schema",
        "short_description": "The output XML file failed to follow the TXC 2.4 schema"
      },
      "txc_validation_failed": {
        "explanation": "The data can't be exported due to the following critical errors:\n{{errors}}",
        "short_description": "The data can't be exported due to critical errors"
      },
      "unknown_data_set_mode": {
        "detailed_description": "Both the data_set and the is_day_based parameters are missing",
        "short_description": "It is not possible to determine whether this is dataset is defined according to days or service groups"
      },
      "unknown_error_in_otfs": {
        "detailed_description": "Error in file {{file_name}} in line {{line_number}}",
        "short_description": "An error occurred during the OTFS import"
      },
      "unknown_pattern_for_trip": {
        "detailed_description": "In route {{route_name}}, service ID {{service_id}}, direction {{direction}. Trip that starts at {{departure_time}} has an unknown pattern.\nTo view: {{url}}",
        "short_description": "Unknown pattern for trip in timetable"
      },
      "unrecognized_route_ids": {
        "detailed_description": "Route IDs: {{route_ids}}",
        "short_description": "A timetable can't be built for unrecognized route IDs"
      },
      "unrecognized_service_id": {
        "short_description": "The service ID {{service_id}} is not recognized"
      },
      "unsupported_file_type_exception": {
        "detailed_description": "To help us identify the format please do the following:\n\n:{{formats_data}}",
        "short_description": "Data protocol could not be identified"
      },
      "unsupported_pbs_vehicle_preference": {
        "short_description": "This action could not be completed because the {{preference_name}} preference has been phased out. All information in this preference must be deleted. Contact support@optibus.com for assistance."
      },
      "vehicle_duplicate_next_event_error": {
        "short_description": "Duplication of events: On vehicle block ID {{vehicle_block_id}} event index {{event_index}} is his own next event"
      },
      "vehicle_duplicate_prev_event_error": {
        "short_description": "Duplication of events: On vehicle block ID {{vehicle_block_id}} event index {{event_index}} is his own previous event"
      },
      "vehicle_missing_deadhead_cannot_be_completed": {
        "detailed_description": "{{event1}} and {{event2}} are missing a deadhead trip between them",
        "short_description": "Vehicle block {{vehicle_block_id}} is missing a deadhead trip, but it can't be completed"
      },
      "vehicle_missing_deadhead_cannot_be_completed_with_overlap": {
        "detailed_description": "{{event1}} and {{event2}} are missing a deadhead trip between them and the required deadhead duration {{duration}} creates a complete overlap over the second task",
        "short_description": "Vehicle block {{vehicle_block_id}} is missing a deadhead trip, but it can't be completed"
      },
      "wrong_direction_enum_gtfs": {
        "detailed_description": "The following route directions are invalid: {{routes_ids}}",
        "short_description": "The supported direction values are 0, 1 or 2."
      },
      "ZeroInArrayError": {
        "short_description": "Please do not include 0 in the array of ignored columns."
      }
    },
    "data_warning": {
      "avail_block_missing_integer_id": {
        "explanation": "Vehicle ID {{vehicle_id}} is not an integer value.\nPlease make sure all vehicle IDs are integers",
        "short_description": "Can't export Avail"
      },
      "avail_route_missing_integer_id": {
        "explanation": "Route {{route_id}} does not have an integer defined for the route, route code, or Avail_route_number.\nPlease assign an integer to one of these values.",
        "short_description": "Can't export Avail"
      },
      "avail_same_working_days_services": {
        "explanation": "Please select only one Service for each day of the week. For special days of operation (such as holidays), please fill in the appropriate meta-data indicating special operation.",
        "short_description": "Can't export AVAIL. Selected Service {{first_service_name}} and Service {{second_service_name}} operate on the same day of the week"
      },
      "avail_schedule_missing_project_date": {
        "explanation": "Project does not have defined dates.\nPlease define dates (operation period) for the project.",
        "short_description": "Can't export Avail"
      },
      "avail_schedule_missing_project_description": {
        "explanation": "Project does not have defined description.\nPlease add project description, up to 50 characters.",
        "short_description": "Can't export Avail"
      },
      "avail_stop_missing_integer_id": {
        "explanation": "Stop ID {{stop_id}} is not an integer, nor is STOP CODE or AvailStopNumber. Please define STOP CODE or AvailStopNumber to be an integer value.",
        "short_description": "Can't export AVAIL"
      },
      "avail_time_point_not_whole_minute": {
        "explanation": "Route {{route_name}}, direction {{direction}}, pattern {{pattern}}, stop {{stop_name}} is a time point, but has departure time {{departure_time}}. All time points for the Avail export must have full minutes. Please correct this is the timeplan: {{link_to_timeplan}}.",
        "short_description": "Can't export Avail"
      },
      "avail_two_time_points_same_dep_time": {
        "explanation": "Route: {{route_name}}, direction: {{direction}}, pattern: {{pattern}}, stops: {{stop_name_first}} and {{stop_name_second}} are time points with the same departure time.different departure times, which must be in full minutes.Please correct this in the timeplan: {{link_to_timeplan}} .",
        "short_description": "Can't export Avail"
      },
      "cant_optimize_without_vehicles_and_without_vehicle_optimization_turned_on": {
        "short_description": "To optimize this schedule, select \"Optimize vehicles\" in the Optimization Settings."
      },
      "custom_filter_initialize": {
        "short_description": "This action could not be completed because the {{filter_class}} in {{preference_name}} preference is not valid. Fix those issues and try again."
      },
      "data_extraction_or_parse_failed": {
        "detailed_description": "Errors: {{messages}}",
        "short_description": "Looks like something went wrong with the timeplans extraction or the data content."
      },
      "deadhead_to_nowhere": {
        "detailed_description": "The deadhead is associated with the following vehicle(s): {{vehicle_ids}}, schedule: {{schedule_name}} and service: {{service_name}}",
        "short_description": "The export could not be completed because of a deadhead that is not followed by a service trip or pull-in. To export, first delete the deadhead or convert it to a pull-in. "
      },
      "depot_and_stop_same_id_different_location": {
        "short_description": "A depot and stop have the same ID ({{depot_id}}), but different locations"
      },
      "depot_points_to_non_existing_stop": {
        "short_description": "The depot at index {{number}} in the 'Depot Setup' preference has a selected stop '{{stop_id}}' that can not be found in the stop catalog. Change the depot stop or add the stop to the stop catalog before continuing."
      },
      "driver_base_illegal_pattern_type": {
        "short_description": "Error in driver base pattern {{pattern_name}} - Duty base pattern type must have at least one of the following types: {{pattern_type_keys}}"
      },
      "driver_signing_refers_to_non_existing_breaks": {
        "detailed_description": "The following breaks are missing from the Duty Breaks preference: {{missing_duty_break_ids}}",
        "short_description": "This action could not be completed because the '{{instance_pref_name}}' preference (in the Driver signing category) references breaks that do not exist in the Duty Breaks preference. Remove these breaks from the '{{instance_pref_name}}' preference. Or add the missing breaks to the Duty Breaks preference."
      },
      "duplicated_time_definition": {
        "detailed_description": "This action could not be completed because there are duplicate time definition IDs in your preference settings. To continue, delete the time definition ID '{{time_definition}}' in the Time Definitions preference. (Alternatively, if you have multiple preference groups, you may associate the ID with a different preference group.)",
        "short_description": "Action could not be completed"
      },
      "duplicate_registration_name": {
        "short_description": "The protocol could not be exported because it contains duplicate registration names. To continue, go to the registration configuration and make sure that all registrations have unique names."
      },
      "duplicate_service_id_defined": {
        "short_description": "Service ID {{service_id}} was defined more than once"
      },
      "duplicate_stops": {
        "detailed_description": "The following elements have problematic IDs: {{list_of_duplicate_stop_ids}}",
        "short_description": "There are several stops or places with the same ID."
      },
      "duplicate_trip_id": {
        "short_description": "There is a duplicate trip ID: {{trip_id}}"
      },
      "duty_type_wrong_time_definition": {
        "short_description": "The time definition with ID {{time_id}} for duty type {{duty_type_id}} could not be found"
      },
      "excel_import_parsing_row_warning": {
        "detailed_description": "{{message}}",
        "short_description": "The dataset could not be imported because the column '{{column}}' is empty in row '{{row}}' in sheet '{{sheet}}' and must filled in. Edit the dataset to fill in the column '{{column}}'. Then import it again."
      },
      "expert_enrichment_without_preference": {
        "short_description": "Expert enrichment can't be done without an enabled expert enrichment preference"
      },
      "export_formatter_does_not_exist": {
        "short_description": "The export could not be completed because the protocol or report you are trying to export is part of the 'Export formats' preference, which has been replaced by the Protocols and Reports modules. Remove '{{preference_name}}' from your 'Export formats' preference and begin using the Protocols and Reports modules to export instead."
      },
      "global_min_higher_than_max": {
        "short_description": "This action could not be completed because of a problem with the way a global constraint has been defined. Go to the Global Constraints preference and then to the constraint \"{{preference_name}}\". Make sure the maximum value (\"upper bound\", which is currently {{upper_bound}}) is larger than the minimum value (\"lower bound\", currently {{lower_bound}})."
      },
      "illegal_config": {
        "short_description": "A configuration used in preference '{{preference_name}}' and properties {{properties}} is not allowed"
      },
      "illegal_deadhead_direction": {
        "detailed_description": "A deadhead between stop {{origin_stop}} and stop {{destination_stop}} was defined with direction {{direction}}, which is invalid. Please change the deadhead direction to one of the following valid options: {{valid_options}}",
        "short_description": "A deadhead was defined in the catalog with an invalid direction: {{direction}}"
      },
      "illegal_operation_type": {
        "detailed_description": "The operation type: {{op_type}} was assigned to service group: {{service_group}}\nwhile legal operation types are {{legal}}",
        "short_description": "Illegal operation type was assigned to service group"
      },
      "illegal_registration_name": {
        "short_description": "The protocol could not be exported because the registration named {{registration_name}} does not contain a valid registration name. To continue, go to the registration configuration and make sure that all registrations have a name composed of up to 4 digits."
      },
      "illegal_service_id_config_for_trip": {
        "short_description": "Trip ID {{trip_id}} has service ID configuration that is not allowed"
      },
      "import_empty_field_value": {
        "detailed_description": "The {{type_of_document}} can't be imported because the '{{mandatory_field_name}}' is missing. Define the '{{mandatory_field_name}}' in row {{row}} and import again.",
        "short_description": "{{type_of_document}} can't be imported"
      },
      "import_roster_with_undefined_task": {
        "short_description": "The import contains tasks that can't be matched with any existing duty or standby type. View the tasks below and edit the file. Then Import again."
      },
      "import_roster_with_undefined_task_in_over_ten_days": {
        "short_description": "The import contains tasks that can't be matched with any existing duty or standby type. View the first 10 days of tasks below (there is a full list in raw error) and edit the file. Then Import again."
      },
      "incompatible_stop_arrival_times": {
        "detailed_description": "The following trip IDs have stop arrival times that are not compatible with the stop sequence: {{trip_ids}}",
        "short_description": "The GTFS file couldn't be imported because one or more trip IDs have stop arrival times that are not compatible with the stop sequence. Go to the file and edit the stop arrival times. Then import the file again."
      },
      "invalid_alignment_value": {
        "short_description": "The alignment at row {{row}} must be defined as either “earliest” or “latest”, or left blank if any alignment is acceptable"
      },
      "invalid_break_rule_definition": {
        "short_description": "'{{break_rule_id}}' wasn't defined correctly in the breaks preference. To get going again, please contact support"
      },
      "invalid_catalog": {
        "short_description": "This action could not be completed because the {{catalog_type}} preference contains an invalid catalog. To continue, go to the preference and assign a valid catalog."
      },
      "invalid_stop_id": {
        "detailed_description": "The following midpoint stop IDs are either invalid or not midpoints: {{stop_ids}}",
        "short_description": "The export could not be completed because one or more midpoint stop IDs are either invalid or not midpoints. Go to configurations and make sure that all midpoint stop IDs are both valid, midpoints and separated by a comma. Then export again."
      },
      "invalid_stop_sequence": {
        "detailed_description": "The trip ID {{trip_id}} could not be imported import due to invalid stop sequence value. Stop sequence values are {{stop_sequences}}",
        "short_description": "Schedule could not be imported due to invalid stop sequence value in trip {{trip_id}}"
      },
      "invalid_travel_time": {
        "detailed_description": "The process failed while exporting due to invalid travel time. Please validate stop {{stop_id}} in {{service_group_name}}, with invalid travel time. Route: {{sign}}, Direction: {{direction}}, Invalid duration: ({{travel_time}} sec.)",
        "short_description": "Invalid travel time for stop {{stop_id}} in service {{service_group_name}}"
      },
      "keyed_singleton_preference_violation": {
        "detailed_description": "For {{key}}, {{num}} were given: {{values}}",
        "short_description": "Only one {{preference_type}} preference is permitted per {{key_name}}"
      },
      "main_pattern_missing_trip": {
        "detailed_description": "The following routes have a main pattern that is not assigned to any trips: {{route_signs}}",
        "short_description": "The Stop Billboard report could not be exported because one or more routes have a main pattern that is not assigned to any trips. Go to the Timeplan and make sure that routes have a main pattern that is assigned to one or more trips. Then export the report again."
      },
      "mandatory_ev_preference_missing": {
        "short_description": "This action could not be completed because {{preference_type}} preference has not been defined. Make sure all the preferences in the Electric Vehicles category (Batteries, Chargers, Charging Profiles, Charging Stations) are defined."
      },
      "mismatch_registration_short_notice_service_code": {
        "short_description": "The protocol could not be exported because the registration named {{registration_name}} has short notice justification service reference {{service_ref}} that does not match any service reference. To continue, go to the registration configuration and make sure that all the short notice justification service references have a matching service reference."
      },
      "missing_agency_name": {
        "short_description": "An agency is missing an agency ID and name, which are required"
      },
      "missing_config": {
        "short_description": "The configuration of '{{preference_name}}' is missing. Add this preference before optimizing."
      },
      "missing_depot": {
        "short_description": "Data could not be exported because the dataset {{data_set_name}} ({{data_set_id}}) schedule {{schedule_id}}, service {{service_name}} is missing a depot preference"
      },
      "missing_depot_coordinates": {
        "short_description": "The TransXChange file couldn't be imported because at least one depot is missing latitude/longitude coordinates.\nEdit the TransXChange file \"{{file_name}}\" or the stop catalog to add coordinates to the following depot(s): {{depot_ids}}"
      },
      "missing_depot_locked_vehicle": {
        "explanation": "Vehicle ID: {{vehicle_id}} starts or ends at a depot {{depot_name}} (id: {{depot_id}}) that is not part of the defined depots. Remove the lock or add this depot to the defined depots under the depots preference",
        "short_description": "The locked vehicle with ID: {{vehicle_id}} starts or ends at a depot that is not part of the existing depots"
      },
      "missing_depot_stop_id": {
        "short_description": "The depot at index {{number}} in the 'Depot Setup' preference has no selected stop. Add a stop before continuing."
      },
      "missing_driver_base_configuration": {
        "short_description": "The preference groups {{preference_groups}} include the 'Duty Terminal Stops' preference but are missing the required 'Driver Base' preference. To continue, define the 'Driver Base' preference for these preference groups."
      },
      "missing_duty_break_definition": {
        "detailed_description": "The operation failed since a preference called {{pref_name}} referenced {{missing_duty_break_ids}} which not defined in the Duty Breaks preference.\nPlease add definitions for them in the Duty Breaks preference and retry",
        "short_description": "Duty breaks: {{missing_duty_break_ids}} are not defined in the Duty Breaks preference"
      },
      "missing_duty_types_definition": {
        "short_description": "This action could not be completed because the following preference groups do not have duty types defined: {{groups}}. To proceed, either define duty types for these preference groups or go to each preference group in your preferences and select \"Exclude from optimization\"."
      },
      "missing_garages_on_operators": {
        "short_description": "The TransXChange file couldn't be imported because there's at least one operator that isn't associated with a depot.\nEdit the TransXChange file \"{{file_name}}\" to associate the following operators with depot ID(s): {{operator_codes}}"
      },
      "missing_mandatory_deadhead": {
        "explanation": "A deadhead is needed between these two locations to complete this operation, but it is not part of the deadhead catalog.\nDefine it within the deadhead catalog, or enable the default deadhead generator.\nThe default generator uses aerial distance to derive deadheads, and in order to work, it requires correct latitude/longitude settings for the relevant stops.",
        "short_description": "A deadhead from {{origin}} to {{destination}} at {{time}} is required to complete this operation, but it is not defined in the deadhead catalog"
      },
      "missing_operator_data": {
        "short_description": "The export could not be completed because the Operator configuration does not contain any data. Go to the Operator configuration and add data. Then export again."
      },
      "missing_operator_id": {
        "short_description": "The export could not be completed because Operator configuration does not contain an ID. Go to the Operator configuration and add the missing ID. Then export the timeplan again."
      },
      "missing_project_naptan_stops": {
        "short_description": "Stops {{stops_list}} are missing latitude and longitude information. Please add the missing information using the Export and Import stop catalog feature in the project and try again."
      },
      "missing_registration_circulated_authorities": {
        "short_description": "The protocol could not be exported because the registration named {{registration_name}} does not contain any circulated authorities. To continue, go to the registration configuration and make sure that all registrations have at least one selected circulated authority."
      },
      "missing_registration_discontinued_service_operator": {
        "short_description": "The protocol could not be exported because the registration named {{registration_name}} has short notice type of ReplaceDiscontinuedService, but missing the discontinued service operator. To continue, go to the registration configuration and make sure that all registrations that have short notice type of ReplaceDiscontinuedService have a discontinued service operator."
      },
      "missing_registration_licence_number": {
        "short_description": "The protocol could not be exported because the registration named {{registration_name}} does not contain a licence number. To continue, go to the registration configuration and make sure that all registrations have a licence number."
      },
      "missing_registration_minor_change_description": {
        "short_description": "The protocol could not be exported because the registration named {{registration_name}} has change impact that does not exceed limit, but has no minor change description. To continue, go to the registration configuration and make sure that all registrations that have change impact that does not exceed limit have also a minor change description."
      },
      "missing_registration_non_public_description": {
        "short_description": "The protocol could not be exported because the registration named {{registration_name}} is set to be not available for public, but has no description. To continue, go to the registration configuration and make sure that all registrations that are not available for public have a description."
      },
      "missing_registration_service_code": {
        "short_description": "The protocol could not be exported because the registration named {{reg_name}} does not contain a service reference. To continue, go to the registration configuration and make sure that all registrations have a service reference."
      },
      "missing_registration_short_notice_description": {
        "short_description": "The protocol could not be exported because the registration named {{registration_name}} has short notice type of {{short_notice_justification_type}}, but missing the short notification description for the {{description_tag}} element. To continue, go to the registration configuration and make sure that all registrations that have short notice type of {{short_notice_justification_type}} have a short notice description."
      },
      "missing_registration_short_notice_details": {
        "short_description": "The protocol could not be exported because the registration named {{registration_name}} has short notice type of {{short_notice_type}}, but missing either the relevant service reference or description. To continue, go to the registration configuration and make sure that all registrations that have short notice type of {{short_notice_type}} have both relevant service reference and description"
      },
      "missing_registration_submission_date": {
        "short_description": "The protocol could not be exported because the registration named {{registration_name}} does not contain a submission date. To continue, go to the registration configuration and make sure that all registrations have a submission date."
      },
      "missing_registration_traffic_areas": {
        "short_description": "The protocol could not be exported because the registration named {{registration_name}} does not contain any traffic areas. To continue, go to the registration configuration and make sure that all registrations have at least one selected traffic area."
      },
      "missing_relief_schedule_configurations": {
        "short_description": "A relief schedule or schedule with taxi pairing cannot be created without taxi schedule or relief car preferences"
      },
      "missing_required_column_in_file": {
        "detailed_description": "In file {{filename}} the required column {{column}} is missing",
        "short_description": "The required column {{column}} is missing"
      },
      "missing_required_column_in_row_in_file": {
        "detailed_description": "In file {{filename}} the required column {{column}} is missing in row {{row}}",
        "short_description": "The required column {{column}} is missing"
      },
      "missing_required_gtfs_txt_file": {
        "short_description": "The required file {{filename}} is missing"
      },
      "missing_route_error": {
        "detailed_description": "Trip {{trip_id}} refers to this route.\nThis usually happens when the route is missing from the routes file/tab.",
        "short_description": "Route {{route_id}} has not been defined"
      },
      "missing_route_group_preference": {
        "short_description": "Missing route_groups preference - No groups are defined for the financial report"
      },
      "missing_route_travel_times": {
        "detailed_description": "Running times are missing for route {{route}} under service {{service_id}}",
        "short_description": "Running times for route {{route}} for service {{service_id}} are missing"
      },
      "missing_stops_or_stop_groups": {
        "short_description": "This action could not be completed because the {{pretty_preference_name}} preference contains the following stop(s) or stop group(s) that do not exist in the schedule: {{stop_id}}. To continue, go to the preference and remove these stops."
      },
      "missing_stop_coordinates": {
        "short_description": "Stop {{stop_name}} is missing coordinates"
      },
      "missing_time_definition": {
        "detailed_description": "Time definition '{{time_id}}' was defined but wasn't defined in time definitions preference",
        "short_description": "Missing time definition declaration"
      },
      "missing_time_definition_for_breaks_pref": {
        "detailed_description": "Time definitions: '{{time_definition_ids}}' were defined in continuous break rule (id: {{rule_id}}) in preference {{break_pref_name}} but weren't defined in time definitions preference",
        "short_description": "Missing time definition declaration"
      },
      "missing_time_definition_with_pref_groups": {
        "detailed_description": "Time definition '{{time_id}}' was defined but wasn't defined for preference group '{{preference_group}}' in time definitions preference",
        "short_description": "Missing time definition declaration"
      },
      "missing_time_in_time_point_error": {
        "short_description": "Timepoint {{stop_id}} is missing time (trip: {{trip_id}})"
      },
      "missing_travel_time_for_time_point": {
        "detailed_description": "In the running times {{travel_times}} for route {{route}}/{{direction}}, the time for {{time_points}} is missing",
        "short_description": "The running times for timepoint(s) in route {{route}}, direction {{direction}} are missing"
      },
      "missing_trips_ids_in_stops_time": {
        "detailed_description": "The following trip IDs appear in the trips file but not in the stop_times file {{trips_ids}}",
        "short_description": "Missing trips IDs in file stop times"
      },
      "missing_trip_id_in_stops_time": {
        "detailed_description": "ID {{trip_id}} appears in the trips file but not in the stop_times file",
        "short_description": "The trip ID is missing from the stop times file"
      },
      "missing_trip_id_in_trips_file_in_ogtfs": {
        "short_description": "Trip {{trip_id}} is missing in the trips file"
      },
      "missing_trip_id_in_trips_vehicle_types_file": {
        "short_description": "A trip ID or vehicle type is missing in the trip vehicle type file in line {{line}}"
      },
      "multiple_pref_not_allowed": {
        "detailed_description": "{{instance_names}} are defined within preference group '{{preference_group}}' but only one definition is allowed",
        "short_description": "Preference type {{preference_type}} has more than one definition for the same preference group"
      },
      "multiple_travel_instances_of_same_pref_group": {
        "detailed_description": "The following preference groups have more than one configuration defined: {{pref_group_ids}}",
        "short_description": "The {{preference_type}} preference has multiple configurations defined for the same preference group, although the maximum configuration is one per group. To continue, please remove the additional configurations."
      },
      "naptan_stops_api": {
        "short_description": "The stops {{stops_list}} failed to be imported using Naptan API. Please contact support for assistance."
      },
      "non_integer_duty_ids": {
        "explanation": "Some duty IDs are not integers, for example: {{duty_ids}}. Please make sure all duty IDs are integers",
        "short_description": "Can't export Avail"
      },
      "not_all_trips_assigned": {
        "short_description": "Can't export AVAIL - You have unassigned trips in service {{service_name}}. Please make sure all trips are assigned to both vehicles and duties, and then export again."
      },
      "no_end_of_day_depot": {
        "detailed_description": "At least one of the depots must be available as an end-of-day depot",
        "short_description": "An end-of-day depot is missing and needs to be defined"
      },
      "no_relief_time_point_for_sub_route": {
        "short_description": "Did not find a corresponding relief time point for the sub route in trip {{trip_id}}"
      },
      "no_service_id_defined": {
        "short_description": "No service IDs were defined"
      },
      "paddles_require_schedule_with_days": {
        "short_description": "The paddles report can't be exported from a schedule without the day of the week"
      },
      "parent_not_found": {
        "short_description": "Stop {{stop_id}} has a parent {{parent_id}} that is not in the stop catalog"
      },
      "place_chain": {
        "detailed_description": "If a stop is designated as a place, it can't have a different place associated with it. Please modify the following stops and try again. {{list_of_chains}}",
        "short_description": "Illegal stop(s)"
      },
      "preference_parameter_missing_value": {
        "detailed_description": "Preference {{preference_name}} (type: {{preference_type}}) has a parameter named '{{parameter_name}}' that is missing a value, and no default value was provided",
        "short_description": "This action could not be completed because there's a problem with the \"{{preference_name}}\" preference. Make sure all the elements of the preference are filled in correctly"
      },
      "relief_points_negative_distance": {
        "detailed_description": "The distance between {{relief_stop_1}} and {{relief_stop_2}} is {{distance}}. The distance can't be negative.",
        "short_description": "The distance between two relief stops is negative ({{distance}})"
      },
      "relief_point_was_not_found_in_stops_file": {
        "short_description": "Relief point {{relief_point_idx}} was not found in stops file"
      },
      "route_negative_distance": {
        "detailed_description": "The distance for this route (from: {{origin}} to: {{destination}}) is {{distance}}. The distance can't be negative.",
        "short_description": "The route distance for {{route_id}} is negative"
      },
      "schedule_is_missing_days_or_service_ids": {
        "detailed_description": "These trip IDs are missing one of the columns: {{trip_ids_with_missing_days}}",
        "short_description": "The schedule could not be imported because it's missing service days for one or more trips. To import, open the Excel file and add the missing service days to the \"Days\" or \"Service IDs\" column. Then import the schedule again."
      },
      "schema_error": {
        "short_description": "The configuration of preference '{{preference_name}}' doesn't match the required schema. Please check the preferences."
      },
      "stop_defined_as_place_and_stop": {
        "detailed_description": "Please check the following stops: {{list_of_duplicate_stop_ids}}",
        "short_description": "Some stops were defined both as a place and not a place."
      },
      "sub_route_negative_distance": {
        "detailed_description": "The distance for the sub-route (from: {{origin}} to: {{destination}}) is {{distance}}. The distance can't be negative.",
        "short_description": "The distance of the sub-route of route {{route_id}} is negative"
      },
      "sub_trip_does_not_match_to_sub_route": {
        "short_description": "Number of trace points in sub-trip {{sub_trip}} does not match number of trace points in sub-route {{sub_route}}"
      },
      "taxi_to_preference_defined_with_travel_and_no_purpose": {
        "short_description": "The operation could not be completed because the {{taxi_to_preference}} preference is defined but there is no Duty Travel preference defined for that purpose. To continue, either delete the {{taxi_to_preference}} preference or add {{travel_purpose}} to Purpose in the Duty Travel preferences."
      },
      "timetable_invalid_stop_id": {
        "short_description": "Stop {{stop_id}} has invalid ID"
      },
      "time_format_invalid": {
        "detailed_description": "Error in file/sheet: {{file_name}}, column {{column}}, row {{row_num}}. \nExpected time format: %H:%M:%S or %H:%M, actual: {{time}}.",
        "short_description": "There is an error in the time format"
      },
      "too_many_duties_caesar_integration": {
        "short_description": "Caesar integration does not support more than {{max_duties}} duties"
      },
      "travel_purpose_enabled_without_taxi_to_preference": {
        "short_description": "The operation could not be completed because the {{taxi_to_preference}} preference is not defined, although there is a Duty Travel preference defined for that purpose. To continue, either add the {{taxi_to_preference}} preference or delete the Duty Travel preference."
      },
      "trip_with_negative_or_zero_travel": {
        "detailed_description": "The start time of trip {{trip_id}} (departure time {{departure_time}} minus boarding time {{boarding_time}}) must be less than the end time (arrival time {{arrival_time}} plus alighting time {{offboarding_time}})",
        "short_description": "The travel time of trip (id {{trip_id}}) is not permitted"
      },
      "trip_zero_duration_error": {
        "short_description": "Trip {{trip_id}} is zero minutes long"
      },
      "txc_duplicate_service_code": {
        "short_description": "The TransXChange file could not be imported because it contains services with duplicate service codes. The following service codes are assigned to more than one service: {{service_codes}}. Open the file and assign unique service codes. Then import the file again."
      },
      "txc_illegal_holiday_for_region": {
        "explanation": "The following holidays: {{holiday_names}} are not valid under TransXChange protocols in your region. Please change the holiday names or fix the region assignment",
        "short_description": "Trip id {{trip_id}} has illegal configuration for holidays"
      },
      "txc_import_journey_pattern_section_warning": {
        "short_description": "The TransXChange file can't be imported because at least one of the routes (ID: {{journey_pattern_section_id}}) has no associated information. To import the TransXChange file, make sure it contains all the necessary information and upload the file again."
      },
      "txc_import_journey_pattern_timing_link_are_not_conscutive": {
        "short_description": "The TXC file could not be imported because the following pair of JourneyPatternTimingLink locations can't be connected. Please make sure the end location of the first JourneyPatternTimingLink matches the start location of the second and import the file again: \n{{first_timing_link}}, {{second_timing_link}}"
      },
      "txc_import_operator_depot_code_is_missing_in_stop_catalog": {
        "short_description": "Operator {{operator_code}} has depot codes that are missing from the stop catalog: {{missing_depot_codes}}.\nAdd the depot codes to the stop catalog and export again."
      },
      "txc_import_route_has_no_sign": {
        "short_description": "Route {{route_id}} can't be imported because it is not associated with a service code. Please add private code tag to add a service code to this route."
      },
      "txc_import_route_links_are_not_consecutive": {
        "short_description": "The TXC file could not be imported because the following pairs of RouteLink locations can't be connected. Please make sure the end location of the first RouteLink matches the start location of the second and import the file again:{{first_link}}, {{second_link}}"
      },
      "txc_invalid_service_ref_in_registration": {
        "detailed_description": "The following registration elements are associated with service codes that do not exist in the Services element:\n{{invalid_service_refs_string}}",
        "short_description": "The TransXChange file could not be imported because one or more registration elements are associated with a service code that does not exist in the Services element. Go to the file and add the missing service code(s) to the Services element. Then import the file again."
      },
      "txc_meta_field_unsupported_value": {
        "detailed_description": "The following unsupported value(s) can be found in the associated element(s) and registration number(s): \n{{unsupported_values_string}}",
        "short_description": "The TransXChange file could not be imported because one or more elements contain unsupported values. Go to the file and edit the value(s), then import the file again. To add any value to your supported values, contact support@optibus.com."
      },
      "txc_multiple_days_on_trip_mismatched_days_of_op_range_config": {
        "short_description": "Trip id {{trip_id}} has illegal configuration of days which mismatched the days of operation range configured"
      },
      "txc_serviced_organisation_missing_code": {
        "short_description": "The file could not be exported because the {{serviced_organisation_name}} Serviced Organisation configuration does not have an organisation code defined. Go to the project configuration and define the organisation code. Then export again."
      },
      "unknown_service_id": {
        "detailed_description": "Service {{service_id}} isn't in the calendar but is defined for trip {{tripid}}",
        "short_description": "Trip {{trip_id}} has an unknown service ID ({{service_id}})"
      },
      "unresolved_stops_in_stop_groups": {
        "detailed_description": "The following stop groups contain stops that are not part of the current stop catalog: {{stop_groups}}",
        "short_description": "One or more stop groups contain stops that are not part of the current stop catalog. To continue, go to the stop groups and update the required stops. Or add these stops to the stop catalog."
      },
      "unscheduled_item_is_locked": {
        "detailed_description": "{{term}} {{id}} is marked as locked and is not scheduled",
        "short_description": "Can't lock an unscheduled {{term}} {{id}} {{locking_reason}}"
      },
      "unscheduled_vehicle_events": {
        "detailed_description": "The following schedules contain associated vehicles that are assigned in the vehicle schedule but not in the duty schedule:\n{{schedule_vehicles_dictionary}}.",
        "short_description": "The protocol could not be exported because one or more trips are assigned in the vehicle schedule but not in the duty schedule.\nGo to the schedules and make sure trips are either assigned or unassigned in both the vehicle and duty schedules. Then export again"
      },
      "unsupported": {
        "short_description": "The configuration used is not supported"
      },
      "unsupported_content_type": {
        "short_description": "This action could not take place because the content must be in one of these formats: {{content_required_formats}}.\nThe content is currently in {{current_content_format}} format."
      },
      "unsupported_file_zip_in_zip": {
        "short_description": "The {{file_name}} file could not be imported because the ZIP file you are trying to import is contained within another ZIP file, which is unsupported. To continue, remove the ZIP file so that it is no longer within another ZIP file. Then import again."
      },
      "unsupported_import_file_type_exception": {
        "detailed_description": "The following protocols must include the associated protocol and file types in the file name:\n\n{{formats_data}}",
        "error": "File could not be imported",
        "short_description": "The {{filename}} file could not be imported because the protocol and file type must be specified in the file name. Go to the file name and edit it. Then import the file again."
      },
      "vehicle_type_id_not_in_data_set": {
        "short_description": "This action could not be completed because depot {{depot_id}} is associated with a vehicle that's not in the dataset ({{vehicle_type_id}}).\nTo continue, make sure the depot is associated with the correct vehicles and that the necessary vehicles are included in the dataset."
      }
    },
    "dead_mileage_aggregated_error": {
      "short_description": "EP Morris dead mileage export failed"
    },
    "detailed_validation_error": {
      "depots_not_enough_capacity": {
        "short_description": "In the Depot Setup preference, you specified {{range}} vehicles for the {{depot_name}} depot. But there are {{actual_number_in_depot}} vehicles for the {{depot_name}} depot in your schedule."
      },
      "depots_not_enough_capacity_for_vehicle_type": {
        "short_description": "In the Depot Setup preference, you specified {{range}} {{vehicle_type}} vehicles for the {{depot_name}} depot. But there are {{actual_number_in_depot}} {{vehicle_type}} vehicles for the {{depot_name}} depot in your schedule."
      },
      "depot_vehicle_allocation_illegal_vehicle_type_assignment": {
        "short_description": "The trip starting at {{start_time}} is assigned to a {{vehicle_type_name}} vehicle, which can't be used for this trip. Only these vehicle types are allowed: {{allowed_vehicle_types_names}}."
      },
      "depot_vehicle_allocation_unbalanced_vehicle_types": {
        "short_description": "Depot {{depot}} has unbalanced pull-outs {{pull_outs}} and pull-ins {{pull_ins}} for vehicle type {{vehicle_type}}"
      },
      "depot_vehicle_allocation_vehicle_block_missing_depot_pull_out_trip": {
        "short_description": "Missing a starting depot pull out trip"
      },
      "depot_vehicle_allocation_vehicle_block_pulls_out_from_not_end_of_day_depot": {
        "short_description": "Starting pull out is not from an end of day depot but from {{stop}}"
      },
      "depot_vehicle_allocation_vehicle_block_start_end_depot_differs": {
        "short_description": "Does not finish at the same depot that it starts in, start depot is {{start_depot}} and end depot is {{end_depot}}"
      },
      "detailed_validation_error_illegal_lat_long_coordinates": {
        "short_description": "Stop {{stop}} has an illegal lat long coordinates: {{coordinates}}"
      },
      "detailed_validation_error_missing_deadhead": {
        "short_description": "Missing deadhead between {{first_event}} arriving at stop {{first_event_destination}} at {{first_event_start}} and {{second_event}} departing at stop {{second_event_origin}} at {{second_event_start}}"
      },
      "pre_post_trip_missing_pre_post_trip_event": {
        "short_description": "Event {{event_type}} missing in vehicle block {{vehicle_block_id}}"
      },
      "pre_post_trip_unexpected_pre_post_trip_event": {
        "short_description": "Unexpected {{event_type}} encountered in vehicle block {{vehicle_block_id}}"
      },
      "pre_post_trip_wrong_duration_pre_post_trip_event": {
        "short_description": "{{event_type}} with wrong duration encountered (expected {{time}}) in vehicle block {{vehicle_block_id}}"
      },
      "pre_post_trip_wrong_idle_trip_usage_of_pre_post_trip": {
        "short_description": "{{event_type}} not included in idle trip as expected in vehicle block {{vehicle_block_id}}"
      }
    },
    "dmc_error": {
      "census_layers_error": {
        "short_description": "Error while fetching census layers for timeplan {{timeplan_id}}"
      },
      "reports_config_error": {
        "short_description": "Error while getting reports configuration"
      },
      "reports_config_save_error": {
        "short_description": "Error while saving report configuration"
      },
      "reports_config_validation_error": {
        "short_description": "Report error validation in report {{report_id}}"
      },
      "reports_list_error": {
        "short_description": "Error while getting report list"
      },
      "report_config_error": {
        "short_description": "Error while getting report configuration"
      },
      "report_missing_data_for_action": {
        "short_description": "Missing data in export action request"
      },
      "route_direction_stops": {
        "short_description": "Error while fetching stops for route-direction"
      },
      "route_group_update": {
        "short_description": "Error while updating route groups"
      },
      "url_parse_error": {
        "short_description": "Schedule URL is invalid"
      }
    },
    "duplicateInsertion": {
      "short_description": "A {{object_type}} with that name or ID already exists"
    },
    "duplicate_algorithm_configuration": {
      "short_description": "You can't use {{algo_types}} and advanced vehicle optimization simultaneously. Please select one."
    },
    "excel_import": {
      "driver_base_illegal_circularity": {
        "short_description": "Error in driver base pattern {{pattern_name}} - Unable to process 3 circularities out of 4."
      },
      "duplicate_columns_in_import": {
        "detailed_description": "The following duplicate columns were found: {{duplicate_header_string}}",
        "short_description": "The file could not be imported because there are columns with duplicate header names on the {{tab_name}} tab"
      },
      "duplicate_definition": {
        "detailed_description": "The term {{term}} has duplicate definitions: {{duplicates}}",
        "short_description": "The Excel workbook contains two different definitions for {{term}}"
      },
      "duplicate_route": {
        "detailed_description": "The same route appears with different definitions and properties in row {{row1}} and row {{row2}}",
        "short_description": "The Excel workbook contains two different definitions for route {{route_id}}"
      },
      "duplicate_trip": {
        "detailed_description": "The same trip appears with different definitions and properties in row {{row1}} and row {{row2}}",
        "short_description": "The Excel workbook contains two different definitions for trip {{trip_id}}"
      },
      "error_parsing_row": {
        "detailed_description": "This method is similar to the monotonic validation, but it checks for more severe cases (like overlap), where it's clear that the schedule is not consistent.",
        "short_description": "Row {{row}} of Excel worksheet {{sheet}} could not be parsed"
      },
      "events_without_service_group": {
        "detailed_description": "These rows in the Excel file are not associated with a service group: {{rows}}",
        "short_description": "Excel file could not be imported because some events are not associated with a service group, Please associate all events with a service group.\nOne of the following columns may be empty: Days, Service Group, Service ID."
      },
      "expected_single_sheet": {
        "detailed_description": "This workbook contains multiple sheets: {{sheet_names}}",
        "short_description": "Imported Excel workbooks may only contain one sheet"
      },
      "format_error": {
        "short_description": "{{term_name}} in row {{row}} is not in the right format"
      },
      "illegal_coordinates": {
        "detailed_description": "Something is wrong with the given coordinates {{illegal_coordinates}}",
        "short_description": "Please check the coordinates in {{term}} in row {{row}}"
      },
      "illegal_direction": {
        "short_description": "This file could not be imported because the Direction column includes a direction that is not supported. Go to Row {{row}}, Column {{column}} and change '{{illegal_direction}}' to one of the following: 0, 1, 2, Inbound or Outbound."
      },
      "missing_column_in_import": {
        "short_description": "The file could not be imported because the {{tab_name}} tab is missing a required column: {{expected_column_name}} should be in column {{expected_column_char}}"
      },
      "missing_coordinates": {
        "explanation": "{{term}} must have valid coordinates in the column number {{column}}, in the format of Latitude,Longitude (for example: 34.768123,32.065432)",
        "short_description": "The {{term}} in row {{row}} is missing coordinates"
      },
      "missing_driving_event": {
        "detailed_description": "Vehicle schedule events are {{events}}, starting at {{origin}}, ending at {{destination}} - has no driving events",
        "short_description": "Vehicle {{vehicle_id}} of type {{vehicle_type}} is missing a driving event"
      },
      "missing_field": {
        "short_description": "The {{field_name}} field is empty or missing in file {{source_name}}, row {{row}}"
      },
      "missing_item": {
        "short_description": "{{term}} {{item_id}} is referenced in row {{row}} in the schedule but is not part of the dataset"
      },
      "missing_service_id_for_trips": {
        "short_description": "Please define service id(s) for the trips in rows {{row}}"
      },
      "missing_sheet": {
        "short_description": "The Excel workbook you imported must contain one of the following sheets: {{sheets}}"
      },
      "missing_sub_route_index": {
        "detailed_description": "Trip {{trip_id}} has {{total_lines}} lines. The one in row {{row}} is missing a sub-route index.",
        "short_description": "Trip {{trip_id}} in the Excel workbook is missing a sub-route index"
      },
      "missing_time_in_time_point": {
        "short_description": "The {{field_name}} field is empty or missing in file {{source_name}}, timepoint ID {{time_point_id}}"
      },
      "out_of_order_stop_times": {
        "short_description": "The dataset could not be imported because the stop time in row {{row}} is earlier than the previous stop time in row {{row}}. Go to the StopTimes tab in the dataset and change the time in the Time column to match the stop order. Then import again."
      },
      "schedule_excel_is_missing_service_groups": {
        "detailed_description": "Choose from these valid service group IDs:\n{{available_service_group_data}}",
        "short_description": "The schedule \"{{schedule_file_name}}\" couldn't be imported because it's missing a service group ID.\nOpen the Excel file and add a service group ID that's part of the linked dataset. Then import the schedule again."
      },
      "schedule_file_contains_no_vehicles_or_duties": {
        "short_description": "Schedule file \"{{schedule_file_name}}\" contains no duties or vehicles"
      },
      "schedule_service_group_is_not_part_of_existing_service_groups": {
        "detailed_description": "Choose from these valid service group IDs:\n{{available_service_group_data}}",
        "short_description": "The schedule \"{{schedule_file_name}}\" couldn't be imported because the service group ID provided ({{unfound_service_group_id}}) isn't part of the linked dataset.\nOpen the Excel file and add a valid service group ID, then import the schedule again."
      },
      "schedule_trip_day_mismatch": {
        "detailed_description": "The service trip {{trip}} in row {{row}} in the dataset applies to {{days}}",
        "short_description": "Vehicle {{vehicle_id}} on day {{day}} is assigned to a trip that does not apply to that day"
      },
      "time_table_import_invalid_time": {
        "detailed_description": "Timetable in {{context}} has a time interval in an invalid format ({{interval}}). The format should be: hh:mm-hh:mm",
        "short_description": "The format of timetable interval {{interval}}  is invalid"
      },
      "trip_without_vehicle_types": {
        "short_description": "Please define vehicle type(s) for the trip in row {{row}}"
      },
      "unknown_vehicle_type": {
        "short_description": "The file could not be imported because the Vehicle Type column contains an unknown vehicle type. Go to the file and and update '{{given_vehicle_id}}' in Row {{row}} to one of the following supported vehicle type ids: {{existing_ids}} or vehicle type names: {{existing_types}}. Search if other rows contain the same unsupported vehicle type and update if needed, then import the file again."
      },
      "wrong_column_index_in_import": {
        "short_description": "The file could not be imported because the {{tab_name}} tab has {{expected_column_name}} in column {{actual_column_char}} instead of column {{expected_column_char}}"
      }
    },
    "exporter_error": {
      "configuration_loading_error": {
        "short_description": "Configuration file {{configuration_file}} for {{stage}} could not be loaded"
      },
      "configuration_value_error": {
        "detailed_description": "Expected values for block {{block}} are: {{expected}}",
        "short_description": "Value error on configuration file {{configuration_file}} in block {{block}}"
      },
      "exporter_do_step_error": {
        "detailed_description": "Allowed steps: {{allowed_steps}}, while the mapped steps are: {{mapped_steps}}",
        "short_description": "Executing step {{step_name}} failed"
      },
      "methods_loading_error": {
        "short_description": "Method {{method_name}} for module {{mod_name}} could not be loaded"
      },
      "missing_functionality_error": {
        "detailed_description": "Additional info: {{missing_functionality_str}}",
        "short_description": "Configuration {{configuration}} in block {{block}} is having a functionality issue"
      },
      "unknown_error_in_base_integration": {
        "detailed_description": "Original exception: ({{original_exception}})",
        "short_description": "Unknown error in base integration class"
      }
    },
    "export_timeplan_2_ds": {
      "short_description": "The timeplan is missing data. Please fix the data and export again."
    },
    "file_type_error": {
      "excelNotEnabled": {
        "short_description": "Your timeplan \"{{filename}}\" couldn't be imported because it's not in JSON format. To import, format the timeplan as a JSON file or contact support to enable it to be imported as a ZIP file."
      },
      "notJsonFormat": {
        "short_description": "Your timeplan \"{{filename}}\" couldn't be imported because it's not in JSON format."
      },
      "short_description": "The uploaded file {{filename}} has an unsupported file type ({{mimetype}}). The following type(s) are supported: {{supportedTypes}}"
    },
    "forbidden": {
      "short_description": "You are not authorized to access this data or perform this operation"
    },
    "format_error": {
      "fixed_length_field_size": {
        "detailed_description": "Field value: {{field_value}}, settings length: {{length}}, actual length: {{actual_length}}",
        "short_description": "Field {{field_name}} length doesn't match the length settings"
      },
      "fixed_length_missing_field": {
        "detailed_description": "Issue occurred while parsing {{field_name}} with value of: {{value}} and field length of: {{length}}. Parsed row latest state: {{pattern}}",
        "short_description": "Missing field information for field: {{field_name}}"
      },
      "fixed_length_size": {
        "detailed_description": "Row {{parsed_row}} (length of {{parsed_row_length}}) processed while expected row length is {{row_length}}, spec row length is {{spec_row_length}}",
        "short_description": "Parsed row length doesn't match to the sum of all parsed fields length"
      },
      "fixed_length_unparsed_field": {
        "detailed_description": "Parsed row latest state: {{pattern}}",
        "short_description": "Unparsed field found with delimiter: {{delimiter}}"
      }
    },
    "import_data": {
      "short_description": "The spreadsheet you uploaded is missing data. Please fix the data and upload again."
    },
    "incorrectState": {
      "locking": "Error locking data",
      "oldPassword": "You have used this password before. Please set a new password.",
      "unlocking": "Error unlocking data"
    },
    "infeasible_vehicle_type": {
      "detailed_description": "Vehicle types in piece:\n{}\npiece:\n{}",
      "short_description": "There is a vehicle segment that is missing a valid vehicle type"
    },
    "integration_error": {
      "missing_file": {
        "short_description": "The \"{{content_type}}\" file is missing from the zip file"
      }
    },
    "invalid_operation": {
      "adding_deadhead_in_mid_trip": {
        "detailed_description": "This would create a deadhead in the middle of a trip (a sub-trip) of {{route}} at {{start_time}}",
        "short_description": "A deadhead can't be added in the middle of a trip"
      },
      "assign_vehicle_with_partial_trip_error": {
        "detailed_description": "There are partial trips with duties that must be scheduled before a vehicle can be assigned.\n The following trip IDs have unscheduled parts (sub-trips): {{trips}}",
        "short_description": "Vehicles can't be assigned when there are unscheduled partial trips"
      },
      "edit_non_service_event": {
        "short_description": "We're having trouble editing the selected event. If you try again and still need help, please contact support."
      },
      "event_is_not_taxi": {
        "short_description": "We're having trouble changing the trip you selected. If you try again and still need help, please contact support."
      },
      "event_taxi_no_vehicle_block": {
        "short_description": "We're having trouble adding a passenger to the selected taxi. If you try again and still need help, please contact support."
      },
      "overlapping_pulls": {
        "detailed_description": "New depot pull trips will overlap with existing events. Consider adding a direct deadhead instead",
        "short_description": "Can't create depot pull trips due to overlapping events"
      },
      "relief_move_failed": {
        "detailed_description": "The operation you requested failed. It is usually due to overlapping of new deadheads with existing events",
        "short_description": "Modification operation from container {{source}} to {{target}} failed"
      },
      "relief_trip_has_multiple_passengers": {
        "short_description": "This event could not be deleted because multiple passengers are assigned to it and would be affected. Remove the passengers from this event, then delete it."
      },
      "swap_stretchs": {
        "detailed_description": "In target vehicle/duty {{source_container_id}} event starting at {{target_overlapping_event_start_time}} is overlapping event in {{source_container_id}} at time {{source_overlapping_event_end_time}} ",
        "short_description": "{{container_name}} {{source_container_id}} and {{target_container_id}} could not be swapped"
      },
      "swap_stretchs_overlaps": {
        "detailed_description": "Trips can't be swapped as the additional required deadhead would overlap with current trip",
        "short_description": "{{container_name}} {{source_container_id}} and {{target_container_id}} could not be swapped"
      },
      "taxi_edit_overlapped": {
        "short_description": "The taxi starting at {{taxi_start_time}} can't be edited because that would create an overlap with the {{overlapped_event_type}} starting at {{overlapped_event_time}}. To edit the taxi time, first move the {{overlapped_event_type}}."
      },
      "taxi_reordering": {
        "short_description": "We're having trouble editing the trip you selected. If you try again and still need help, please contact support."
      },
      "trip_modification_require_vehicle_block_change": {
        "detailed_description": "Vehicle {{vehicle_ids}} will need to be changed due to this modification",
        "explanation": "Your current settings do not allow for vehicle modification under interactive parameters. This change will require a change in the vehicles. Please review whether you want to proceed, or turn on \"Allow vehicle modification” in interactive parameters.",
        "short_description": "Modification of this trip will require a change in vehicle"
      }
    },
    "invalid_trip_vehicle_type": {
      "short_description": "This route has a vehicle type that is not valid"
    },
    "manual_editing_error": {
      "explanation": "This editing operation will cause overlapping events",
      "short_description": "This can't be edited manually"
    },
    "manual_edit_error": {
      "add_attendance_overlapped": {
        "short_description": "Can't {{operation}}: On container id {{container_id}} an {{event_name}} event which starts at {{start_time}} and ends at {{end_time}} will overlap with other events"
      },
      "context_container_is_empty": {
        "short_description": "Internal error occured while moving events, Please contact support for assistance."
      },
      "original_container_indexes_are_invalid": {
        "short_description": "Internal error occured while moving events, Please contact support for assistance."
      },
      "remove_attendance_not_attendance_event": {
        "short_description": "Can't remove attendance: On vehicle block id {{vehicle_block_id}} the event with index {{event_index}} is expected to be a {{expected_types_str}}. Instead got {{actual_type}}."
      },
      "remove_attendance_overlapped": {
        "short_description": "Can't remove attendance: On vehicle block id {{vehicle_block_id}} the indexes are out of order start_index = {{start_index}} end_index = {{end_index}}. the valid values are from 0 to {{event_count}}"
      }
    },
    "manual_edit_warning": {
      "add_additional_recharge_after_pull_in": {
        "short_description": "The recharge event could not be added at {{target_stop_id}}. Either recharge at {{current_stop_id}} or add a recharge event after pull-out."
      },
      "add_recharge_duration_lower_than_preferences_minimum": {
        "short_description": "This recharge event couldn’t be added because there isn’t enough time to recharge. You need at least {{minimum_minutes}} minutes to recharge."
      },
      "add_recharge_requires_vehicle_block_change": {
        "short_description": "This recharge event couldn't be added because doing so would affect vehicle {{vehicle_id}}. To allow changes to the vehicle, go to General Settings in the top menu. Under Manual Editing, turn on \"Allow vehicle modification\"."
      },
      "add_recharge_when_the_battery_is_full": {
        "short_description": "This recharge event couldn't be added because the battery is fully charged."
      },
      "add_refuel_at_different_location_warning": {
        "short_description": "This refuel can't be added unless it takes place at {{refuel_stop_location}}."
      },
      "add_refuel_cause_vehicle_events_overlap": {
        "short_description": "Refuel event can't be created between {{refuel_start_time}} and {{refuel_end_time}} because that would create an overlap with another event (the {{overlapping_event_type}} starting at {{overlapping_event_start_time}})."
      },
      "battery_is_almost_at_profile_max_soc_cant_add_recharge_event": {
        "short_description": "This recharge event could not be added because then the battery would reach its maximum state of charge before the minimum charging time ended. (The battery needs {{duration_minutes}} minutes to reach its maximum state of charge.)"
      },
      "battery_is_almost_at_profile_max_soc_cant_edit_recharge_event": {
        "short_description": "This recharge event could not be edited because then the battery would reach its maximum state of charge before the minimum charging time ended. (The battery needs {{duration_minutes}} minutes to reach its maximum state of charge.)"
      },
      "container_events_inconsistent": {
        "detailed_description": "Found out of order events in {{container_type}} id: {{container_id}},\nAt those events: {{first_event_repr}} and {{second_event_repr}}",
        "short_description": "Action could not be completed due to inconsistency in the original {{container_type}} "
      },
      "could_not_find_closest_depot": {
        "detailed_description": "Manual edit could not take place because the proximity of any depots configured in  the dataset is not valid.\nPlease add a valid depot to the following: {{depots}}",
        "short_description": "Edit failed because the depot proximity is invalid"
      },
      "directly_modifying_locked_container": {
        "short_description": "The action could not be completed because the {{container_type}} is locked. To continue, unlock it first."
      },
      "edit_event_causes_illegal_overlap": {
        "short_description": "This event could not be edited because doing so would create an overlap with {{overlapped_event_type}} starting at {{overlapped_event_time}}. To edit the time for this event, first adjust the time for {{overlapped_event_type}}."
      },
      "edit_is_not_allowed_with_preference_that_may_corrupt_schedule": {
        "short_description": "Manual edit action can't be completed due to custom duty preferences: \n{{preferences_names}} which may break the schedule. \nModify these preferences in order to perform this action successfully."
      },
      "edit_recharge_duration_lower_than_preferences_minimum": {
        "short_description": "This recharge event couldn’t be edited because there isn’t enough time to recharge. You need at least {{minimum_minutes}} minutes to recharge."
      },
      "edit_recharge_requires_vehicle_block_change": {
        "short_description": "This recharge event couldn't be edited because doing so would affect vehicle {{vehicle_id}}. To allow changes to the vehicle, go to General Settings in the top menu. Under Manual Editing, turn on \"Allow vehicle modification\"."
      },
      "edit_recharge_time_cause_vehicle_events_overlap": {
        "short_description": "This {{first_event_type}} can’t be edited because it would overlap with the {{second_event_type}} starting at {{second_event_start_time}}."
      },
      "edit_recharge_when_the_battery_is_full": {
        "short_description": "This recharge event couldn't be edited because the battery is fully charged."
      },
      "edit_refuel_at_different_location_warning": {
        "short_description": "This refuel can't be edited unless the location is changed to {{refuel_stop_location}}."
      },
      "edit_refuel_cause_vehicle_events_overlap": {
        "short_description": "This refuel could not be edited because it would overlap with another event (the {{overlapping_event_type}} starting at {{overlapping_event_start_time}})."
      },
      "indirectly_modifying_locked_container": {
        "short_description": "This {{container_type}} (ID {{container_id}}) can't be changed right now because the associated vehicle or duty has been locked."
      },
      "modifying_locked_container": {
        "detailed_description": "{{container_type}} {{container_id}} was being modified and it is locked directly or indirectly by another duty or vehicle block",
        "short_description": "Can't modify a locked {{container_type}}"
      },
      "move_stretch_without_service_trips": {
        "short_description": "It is not possible to move the stretch of container {{container_id}} since it is without service trips."
      },
      "not_enough_time_available_to_add_recharge_event": {
        "short_description": "This recharge event couldn't be added because there isn’t enough time to go to the charging station and recharge."
      },
      "not_enough_time_available_to_edit_recharge_event": {
        "short_description": "This recharge event couldn't be edited because there isn’t enough time to go to the charging station and recharge."
      },
      "overlapped_events": {
        "detailed_description": "The {{first_event_type_name}} starting at {{first_event_start_time}} overlaps with the {{second_event_type_name}} starting at {{second_event_start_time}}",
        "short_description": "Action could not be completed due to events overlapping"
      },
      "swap_could_not_be_completed_due_to_overlap": {
        "detailed_description": "These trips could not be swapped because of an overlap between the {{first_event_type_name}} starting at {{first_event_start_time}} and the {{second_event_type_name}} starting at {{second_event_start_time}} (for {{container_name}} {{container_id_with_overlapped_trips}}).",
        "short_description": "Trips could not be swapped"
      },
      "swap_stretches_overlaps": {
        "detailed_description": "These trips could not be swapped with {{container_name}} {{target_container_id}} because it would require a deadhead that would overlap with other trips.",
        "short_description": "Trips could not be swapped"
      },
      "swap_stretches_sub_trip": {
        "short_description": "Can't swap between {{container_name}} {{source_container_id}} and {{target_container_id}} because sub-trips may not be swapped."
      },
      "transient_custom_event_could_not_be_deleted": {
        "short_description": "It is not possible to delete transient custom event at container {{container_id}}, please recreate this event (from your custom code) with transient=False as non  transient to delete it."
      }
    },
    "manual_taxi_editing_error": {
      "explanation": "The passenger can't be removed as there is no relevant taxi in duty {{duty_id}}",
      "short_description": "Taxis can't be edited manually"
    },
    "notSupported": {
      "rosterGroups": {
        "detailed_description": "In order to import the roster schedule, please ask support to turn on the Roster Group feature",
        "short_description": "Can't import schedule with roster groups"
      },
      "txc_file_cannot_be_imported_export_timeplan_flag_off": {
        "short_description": "The TransXChange file can't be imported because your importing capability isn't currently enabled. Please contact support for assistance."
      },
      "txc_file_cannot_be_imported_timeplan_support_flag_off": {
        "short_description": "The TransXChange file can't be imported because the timeplan module isn't currently included in your Optibus license. To inquire about enabling the timeplan, please contact support."
      }
    },
    "no_day_based_service_group": {
      "short_description": "Service group {{service}} is not a day-based service group"
    },
    "no_solution": {
      "advanced_vehicle_scheduling": {
        "short_description": "Failed to allocate all service trips. Excluded_trips:{{excluded_trips}}"
      },
      "cplex_no_solution_error": {
        "explanation": "An optimal crew schedule could not be created. This may have happened for several reasons.\n Try changing your current preferences so they are less restrictive,\n- replacing null penalties in duty types with numeric values or adding relief points.",
        "short_description": "The optimal crew scheduling could not be found"
      },
      "empty_input_for_lamm_optimization": {
        "detailed_description": "The roster cycles couldn't be optimized because cycle segments are not assigned to any unlocked roster lines. \nTo optimize, go to the optimization settings to optimize cycle segments or go to individual roster cells to assign them to cycle segments. Make sure the relevant roster lines are unlocked.",
        "short_description": "Roster cycles couldn't be optimized"
      },
      "impossible_trip_links": {
        "detailed_description": "Problematic trip links: {{problematic_trip_links}}",
        "explanation": "Try removing these linked trips from  trip_grouping",
        "short_description": "There are {{links_count}} trip links between different duties that can't be linked to one vehicle"
      },
      "infeasible_depot_allocation": {
        "detailed_description": "Depots could not be allocated for the following tasks: {{tasks}}",
        "short_description": "Depots could not be allocated for certain tasks"
      },
      "infeasible_global_constraint": {
        "detailed_description": "Infeasible global constraints:\n{{infeasible_global_constraints}}",
        "short_description": "No solution is available for the current configuration due to global constraints."
      },
      "infeasible_timing_constraint": {
        "detailed_description": "Infeasible timing constraints:\n{{infeasible_timings}}",
        "short_description": "Current configuration does not meet a solution due to {{constraint_names}} timing constraints."
      },
      "infeasible_vehicle_schedule_for_duties": {
        "detailed_description": "The following duties can't be assigned a single vehicle: {{duties_with_unfeasible_vehicle}}",
        "explanation": "The vehicle schedule could not be adapted to fit the duty schedule (i.e., remake blocks) because it would violate the defined vehicle constraints.\n This may have happened because there is not enough depot capacity or because duties could not be assigned a single vehicle because of vehicle constraints and {{term.changeovers}} are not allowed.\nTo get a vehicle assignment that overrides these constraints, please set the 'throw_on_vehicle_infeasibility_error' flag to 'False' or contact support at support@optibus.com.",
        "short_description": "A vehicle schedule could not be found without violating the defined vehicle constraints"
      },
      "missing_advanced_vehicle_optimization": {
        "short_description": "No advanced vehicle optimization input exists at directory {{directory}}"
      },
      "missing_advanced_vehicle_optimization_input": {
        "detailed_description": "Missing files: {{missing_files}}",
        "short_description": "No advanced vehicle optimization input exists at directory {{directory}}"
      },
      "not_enough_depot_capacity": {
        "explanation": "There may be more vehicles in use than depot capacity. Currently {{vehicle_count}} vehicles are being used. Make sure there is enough depot capacity for them all.",
        "short_description": "This vehicle does not start or end at a depot. This may be because there is not enough depot capacity for all vehicles."
      },
      "no_legal_roster": {
        "short_description": "A roster schedule could not be created with the given constraints"
      },
      "no_legal_roster_template_found": {
        "explanation": "The process of roster templates optimization failed. Try replacing templates restrictions with templates preferences or increasing the range of workdays and working hours.",
        "short_description": "A solution could not be found for roster type optimization."
      },
      "no_taxi_pairing": {
        "detailed_description": "A taxi pairing with restricted flag could not be found.",
        "short_description": "A valid taxi pairing could not be created for the vehicle events"
      },
      "no_taxi_pairing_limit_too_restrictive": {
        "detailed_description": "A solution could not be found under current relief vehicle count limit.",
        "short_description": "A taxi pairing could not be created for the given schedules"
      },
      "path_does_not_exist": {
        "short_description": "Something went wrong, path {{path}} does not exist"
      },
      "roster_lines_contain_wrong_cycle_segments": {
        "detailed_description": "The following roster lines have cycle segments requiring optimization:\n{{rosters_with_wrong_segments}}",
        "short_description": "This roster couldn't be optimized because cycle segment optimization hasn't been selected. To optimize, first go to Optimization Settings, then select Roster Cycle Optimization > Cycle Segments."
      },
      "short_description": "A feasible solution could not be found",
      "solution_rostering_infeasible": {
        "detailed_description": "Something went wrong with the optimization. To get optimizing again, contact support",
        "short_description": "Roster can't be optimized"
      },
      "solving_cplex_colgen_on_big_matrix": {
        "short_description": "Solver ran and terminated but no solution found in the working directory: {{directory}}"
      },
      "terminal_stops_too_restrictive": {
        "detailed_description": "Custom terminal stop group filter or route groups are too restrictive",
        "short_description": "Duty terminal stops preference is too restrictive"
      },
      "too_many_templates_error": {
        "short_description": "The optimization could not be completed because there is an issue with the set preferences. Please contact support@optibus.com for assistance."
      }
    },
    "no_valid_duty_candidates": {
      "no_pref_groups": {
        "message": "There are no duties that can be created in your schedule. The preference settings need to be changed."
      },
      "with_pref_groups": {
        "header": "Preference Group | {{preference_group}}",
        "message": "There are no duties that can be created in this preference group. The preference settings need to be changed, or you can exclude the preference group from optimization."
      }
    },
    "no_valid_pieces": {
      "no_pref_groups": {
        "message": "There are no duties that can be created in your schedule because the settings do not enable pieces to be cut. The preference settings need to be changed."
      },
      "with_pref_groups": {
        "header": "Preference Group | {{preference_group}}",
        "message": "There are no duties that can be created in this preference group because the group settings do not enable pieces to be cut. The preference settings need to be changed, or you can exclude the preference group from optimization"
      }
    },
    "only_other_duty_type_candidates": {
      "no_pref_groups": {
        "message": "All the duties that can be created based on these  settings have a duty type defined as \"Other\". The preference settings need to be changed."
      },
      "with_pref_groups": {
        "header": "Preference Group | {{preference_group}}",
        "message": "All the duties that can be created based on these preference group settings have a duty type defined as \"Other\". The preference settings need to be changed, or you can exclude the preference group from optimization."
      }
    },
    "project_data_error": {
      "invalid_project_dates": {
        "detailed_description": "Please input valid start and end dates, using the format DD/MM/YYYY: {{project_start_date}} / {{project_end_date}}",
        "short_description": "The process failed due to invalid project dates"
      },
      "missing_project_in_db": {
        "short_description": "The current {{entity_type}} references a project ID: {{project_id}} that wasn't found in the database"
      }
    },
    "relief_trip_has_multiple_passengers": {
      "short_description": "The taxi has passengers and therefore can't be modified. You can delete the event and add a new one with modified properties."
    },
    "reports_error": {
      "reports_columns_mismatch_error": {
        "detailed_description": "While formatting the report, encountered an undefined column {{column_name}}.\nThis is usually as a result of a wrong group by. Row prefix:\n{{row_prefix}}\nThe expected columns are: {{expected_columns}}",
        "short_description": "Report {{report_name}} columns mismatch error"
      },
      "reports_unknown_sort_column": {
        "detailed_description": "Sort column ({{sort_index}}) {{sort_column}} is not defined as a column",
        "short_description": "Report {{report_name}} has an unknown sort key defined ({{sort_column}})"
      }
    },
    "schedule_inconsistency": {
      "duplicate_event_content_in_schedule": {
        "detailed_description": "{{schedule_name}} schedule contains events with duplicated content",
        "short_description": "There is an inconsistency in the schedule"
      },
      "duplicate_trips_in_crew_schedule": {
        "detailed_description": "There are {{duplicate_trips_count}} duplicate trips in crew schedule",
        "short_description": "There is an inconsistency in the schedule"
      },
      "duplicate_trips_in_vehicle_schedule": {
        "detailed_description": "There are {{duplicate_trips_count}} duplicate trips in vehicles",
        "short_description": "There is an inconsistency in the schedule"
      },
      "duplicate_trip_ids_in_schedule": {
        "detailed_description": "{{schedule_name}} schedule contains events with duplicate ids",
        "short_description": "There is an inconsistency in the schedule"
      },
      "duplicate_vehicle_events_in_duties": {
        "detailed_description": "{{duplicate_events_count}} vehicle events are covered by more than one duty",
        "short_description": "There is an inconsistency in the schedule"
      },
      "illegal_event_type": {
        "detailed_description": "Found illegal event type in the schedule of {{container_type}} {{event_container_id}}, illegal type is {{event_type}}",
        "short_description": "There is an inconsistency in the schedule"
      },
      "move_inconsistent": {
        "detailed_description": "Moving events will cause inconsistency",
        "short_description": "There is an inconsistency in the schedule"
      },
      "non_consecutive_events_index_order": {
        "detailed_description": "Found non consecutive indexed events in the schedule of {{container_type}} {{event_container_id}}",
        "short_description": "There is an inconsistency in the schedule"
      },
      "non_monotonic_duty": {
        "detailed_description": "Schedule event time is not monotonic in duty {{events_container_id}} at index {{event_index}}, preceding events ends {{overlap_duration}} minutes after the next event starts",
        "short_description": "There is an inconsistency in the schedule"
      },
      "non_monotonic_vehicle_block": {
        "detailed_description": "Schedule event time is not monotonic in vehicle {{events_container_id}} at index {{event_index}}, preceding events ends {{overlap_duration}} minutes after the next event starts",
        "short_description": "There is an inconsistency in the schedule"
      },
      "out_of_order_events": {
        "detailed_description": "Found out of order events in the schedule of {{container_type}} {{event_container_id}}, between event {{first_event}} and {{second_event}}.",
        "short_description": "There is an inconsistency in the schedule"
      },
      "uncovered_duty_event": {
        "detailed_description": "Missing vehicle block coverage for the duty vehicle event at index {{missing_event_index}} of duty {{duty_id}}",
        "short_description": "There is an inconsistency in the schedule"
      },
      "uncovered_trips_in_schedule": {
        "detailed_description": "There are {{expected_trips_count}} expected trips but {{existing_trips_count}} exists in the vehicle schedule ({{missing_trips_count}} missing)",
        "short_description": "There is an inconsistency in the schedule"
      },
      "uncovered_vehicle_event": {
        "detailed_description": "Missing crew duty coverage for vehicle event of vehicle block {{vehicle_block_id}}: {{event_indices}}",
        "short_description": "There is an inconsistency in the schedule"
      },
      "vehicle_block_missing_sub_trips": {
        "detailed_description": "Not all sub-trips for trip {{parent_trip_id}} in block {{vehicle_block_id}} exists.  Expected {{parent_sub_trips_count}} sub trips, but only {{sub_trip_count}} exists",
        "short_description": "There is an inconsistency in the schedule"
      }
    },
    "schedule_projection_error": {
      "title": "Unable to import schedule into the {{service_group}} service"
    },
    "schedule_recovery": {
      "exceeding_number_of_iterations": {
        "short_description": "Maximum number of {{max_iterations}} iterations was reached while trying to fix schedule errors caused by '{{operation_name}}'"
      }
    },
    "serverless": {
      "internal_errors": {
        "detailed_description": "We have some technical issues regarding the serverless",
        "short_description": "Unable to run serverless functions due to internal errors"
      },
      "Lambda_exception": {
        "short_description": "Unable to run serverless functions due to internal errors"
      },
      "parallel_error": {
        "short_description": "Unable to run serverless functions due to internal errors"
      },
      "provider_errors": {
        "detailed_description": "We have some technical issues regarding the serverless",
        "short_description": "Unable to run serverless functions due to internal errors"
      },
      "serverless_execution_timeout": {
        "detailed_description": "While the duty pool was being created, {{flow_name}} went over the time limit. For optimization to resume, the number of possible duties must be reduced.",
        "short_description": "We're having trouble completing the optimization process. To get optimizing again, send all the info in this message to support."
      },
      "too_long_serverless_execution": {
        "detailed_description": "The Action {{function_name}} with index {{index}} was executed for {{duration}}ms which is longer than {{max_duration}}ms.",
        "short_description": "Action {{function_name}} was executed for longer than allowed"
      },
      "UnknownServerlessFunction": {
        "short_description": "Unable to run unknown serverless functions {{function_name}}"
      }
    },
    "server_error": {
      "short_description": "Server error occurred"
    },
    "signature_calculation_error": {
      "short_description": "Too many options have been defined for duties. The optimal crew scheduler is unable to calculate a solution in a reasonable time period."
    },
    "stops_issues": {
      "short_description": "The stop catalog file could not be uploaded due to the following issue(s):"
    },
    "themis": {
      "generalError": {
        "detailed_description": "We were unable to load one or more preferences. If this problem persists please contact support@optibus.com",
        "short_description": "Error retrieving preference from cache"
      },
      "getPrefError1": {
        "detailed_description": "Unable to read preference template file, on second try, at {{prefFilePath}} for {{prefType}/{{prefName}} (Original error: {{firstError})",
        "short_description": "Error retrieving preference from cache"
      },
      "getPrefError2": {
        "detailed_description": "Unable to read preference template file at {{metaFilePath}} for {{prefType}/{{prefName}}",
        "short_description": "Error retrieving preference from cache"
      },
      "metaFileError": {
        "detailed_description": "Unable to read meta file at {{metaFilePath}} for {{prefType}/{{prefName}}",
        "short_description": "Error retrieving preference from cache"
      },
      "missing": {
        "detailed_description": "Unable to find preference called {{prefName}}",
        "short_description": "Error retrieving preference from cache"
      },
      "noReadableTemplate": {
        "detailed_description": "No template file found at {{prefFilePath}} for {{prefType}/{{prefName}}",
        "short_description": "Error retrieving preference from cache"
      },
      "templateFileError": {
        "detailed_description": "Unable to read preference template file at {{prefFilePath}} for {{prefType}/{{prefName}}",
        "short_description": "Error retrieving preference from cache"
      }
    },
    "too_many_candidates": {
      "no_pref_groups": {
        "message": "There are too many possible duties that could be assigned to your schedule. The number of duty candidates ({{duty_candidate_count}}) needs to be narrowed down in the preference settings."
      },
      "with_pref_groups": {
        "header": "Preference Group | {{preference_name}}",
        "message": "There are too many possible duties that could be assigned to your schedule. The number of duty candidates ({{duty_candidate_count}}) needs to be narrowed down in the preference settings. (You may want to start with your largest preference group, \"{{largest_preference_group}}\")"
      }
    },
    "too_many_duty_blocks_for_keolis_canada": {
      "short_description": "CIS Exporter: All possible IDs for day indices: ({{day_indices}}) were filled for duty blocks"
    },
    "too_many_duty_candidates_error": {
      "detailed_description": "There are too many possible duty candidates. Adjust preferences or contact support.",
      "explanation": "There are too many duty candidates. Number of candidates: {{combination_count}}. Max. number of candidates: {{max_count}}. Adjust preferences or contact support.",
      "short_description": "Too many duty candidates"
    },
    "trip_has_no_service_ids": {
      "short_description": "Trip with id {{trip_id}} has no service id"
    },
    "trip_service_id_not_found_in_timeplan": {
      "short_description": "Trip with id {{trip_id}} has service id {{service_id}} that doesn't exists in the timeplan.\nTimeplan name: {{timeplan_name}}"
    },
    "uncategorized_error": {
      "header": "Unknown Error",
      "short_description": "Something went wrong. If you try again and still need help, contact support@optibus.com."
    },
    "unscheduled_duties_warning": {
      "cannot_cover_piece_with_duty_error": {
        "detailed_description": "These are the vehicle IDs affected, followed by the time periods that are not covered (up to 5 time periods will be displayed):\n{{time_frames}}",
        "explanation": "These time frames are valid as duty pieces, but can't be combined with other pieces to form a valid duty.\nTo see why these duty pieces can't be combined, examine the validation issues you get after manually creating a duty that contains these time frames.\n\nTo skip this validation, go to the optimization settings and allow unscheduled duties.",
        "short_description": "There are {{count}} time periods within the vehicle block(s) that are not covered by any valid duties."
      },
      "cannot_cover_piece_with_valid_duty_time_ranges_error": {
        "detailed_description": "There are multiple ways to resolve the issue, including changing duty types to cover the missing time periods and checking to make sure no duty types are missing.",
        "short_description": "There are {{count}} time periods within the vehicle blocks that can't be covered by valid duties during certain time periods because the start or end time of those periods is outside the time range defined for valid duty types. The following time periods can't be covered (up to 5 will be displayed):\n{{time_frames}}'"
      },
      "cannot_cut_piece_error": {
        "detailed_description": "These are the vehicle IDs affected, followed by the time periods that are not covered (up to 5 time periods will be displayed):\n{{time_frames}}",
        "explanation": "To resolve the issue, go to the schedule to select the problematic time period. The piece validation icon at the bottom left of the tooltip will provide further details.\n\nTo skip this validation, go to the optimization settings and allow unscheduled duties.",
        "short_description": "There are {{count}} time periods within the vehicle block(s) that are not covered by any valid duty pieces."
      },
      "too_restrictive_preferences": {
        "detailed_description": "Vehicle {{vehicle_id}} could not be cut to duty pieces",
        "explanation": "The following preferences might be too restrictive: {{preference_names}}",
        "short_description": "Duties could not be created for one or more vehicles"
      }
    },
    "updatedVersion": {
      "text1": "We've updated the Optibus platform!",
      "text2": "Refresh to get the most out of it."
    },
    "user_approval_needed": {
      "add_deadhead_collapse_idle_trip_time": {
        "message": "The deadhead will be shortened to avoid overlapping with other trips.",
        "title": "Add deadhead?"
      },
      "dead": "dead",
      "general_operation_collapse_idle_trip_time": {
        "message": "This action requires adding {{idle_trip_type}} trip(s) that will be shortened to avoid overlapping with other trips.",
        "title": "Continue with this action?"
      },
      "move_collapse_idle_trip_time": {
        "message": "Moving the selected trip(s) will add a {{idle_trip_type}} trip that will be shortened to avoid overlapping with other trips.",
        "title": "Move the selected trip(s)?"
      },
      "pull": "pull",
      "swap_collapse_idle_trip_time": {
        "message": "Swapping the selected trip(s) will add a {{idle_trip_type}} trip that will be shortened to avoid overlapping with other trips.",
        "title": "Swap the selected trip(s)?"
      }
    }
  },
  "exportData": {
    "departure_time": "Departure Time: ",
    "errorLevelValidations": "Some of the data you have entered in the timeplan is incorrect. Please go to the validation panels to find and fix those errors before exporting",
    "invalidLatLong": "Invalid (latitude,longitude) for stop:",
    "lessThen2StopsForRoute": "Less than 2 stops for route:",
    "missingLatLong": "Missing (latitude,longitude) for stop:",
    "missingStopData": "Missing stop data for stop:",
    "missingStopsForRoute": "Missing stops for route:",
    "missingTimesForPattern": "Missing timebands for pattern:",
    "missingTimesForRoute": "Missing timebands for route:",
    "noCommonVehicle": "Interlining trips should have at least one vehicle type in common",
    "noTrips": "There are no trips in this timeplan",
    "noVehiclesTypes": "There are no vehicle types in this timeplan",
    "noVehiclesTypesPerTrip": "There are no vehicle types in the trip:",
    "noWorkingPoints": "Interlining trips should contain a trip with a common, non-working point at the start/end",
    "overlappingTimes": "Unable to interline trips due to overlapping times",
    "route": "Route: ",
    "service": "Service: ",
    "tooManyWorkingPoints": "Interlining trips should contain only one trip with a non-working point at the start/end",
    "unmatchedInterline": "There is a problem building interlined trips. Please check the interline IDs to ensure they are correctly paired."
  },
  "filter": {
    "btn": "Filter",
    "buttons": {
      "apply": "Apply",
      "cancel": "Cancel",
      "clearAll": "Clear All"
    },
    "disablerNames": {
      "depots": "Depots",
      "direction": "Direction",
      "dutyDuration": "Duration",
      "expertDuties": "Expert Duty",
      "expertTrip": "Expert Trip",
      "expertVehicles": "Expert Vehicle",
      "routeGroups": "Route Groups",
      "sign": "Route",
      "startTime": "Departure Time",
      "vehicleType": "Vehicle Type"
    },
    "dutyDuration": {
      "between": "Between",
      "paidTime": "Paid Time",
      "spread": "Spread",
      "workTime": "Work Time"
    },
    "filterStack": {
      "no": "No",
      "yes": "Yes"
    },
    "headerTitle": {
      "duties": "Duties",
      "trips": "Trips",
      "vehicles": "Vehicles"
    },
    "hint": {
      "expert": "Type \"@\" to select a parameter; then type \"#\" to see the values available for that parameter."
    },
    "modification": {
      "duty": {
        "all": "Show all duties",
        "only": "Show modified duties only"
      },
      "vehicle": {
        "all": "Show all vehicles",
        "only": "Show modified vehicles only"
      }
    },
    "placeHolders": {
      "depots": "Filter depot(s)",
      "duty": "Duty",
      "dutyType": "Filter duty type(s)",
      "prefGroup": "Filter preference group(s)",
      "routeGroups": "Filter route group(s)",
      "sign": "Filter route(s)",
      "trip": "Trip",
      "vehicle": "Vehicle"
    },
    "quality": {
      "changeovers": "Changeovers",
      "splits": "Splits"
    },
    "title": {
      "depots": "Depots",
      "direction": "Direction",
      "dutyDuration": "Duration",
      "dutyIncludes": "Duty Includes",
      "dutyTypes": "Duty Type",
      "expert": "Expert",
      "filterStack": "Apply to Stack",
      "issues": "Issues",
      "modification": "Modification",
      "prefGroup": "Pref group",
      "routeGroups": "Route Groups",
      "sign": "Route",
      "startTime": "Departure Time",
      "vehicleType": "Vehicle Type"
    }
  },
  "fleetControl": {
    "importSchedule": {
      "adjustBrokenDutiesAndVehicles": "Adjust broken duties and vehicles",
      "assignedInactiveTripsInStack": "Put assigned deleted trips in stack",
      "breakBySetCodeAssignment": "Split rows by duty ID",
      "dateTitle": "Select Date",
      "districtTitle": "Select District",
      "errors": {
        "fetchDistricts": {
          "error": "Fleet control retrieve district error",
          "message": "The process of retrieving districts have failed."
        },
        "import": {
          "error": "Fleet control import error",
          "message": "The import process failed. Please try again with a different district or date."
        }
      },
      "groupBySetCode": "Group by set code",
      "keepTripEventsFlag": "Keep service trips and pulls",
      "skipProblematicTrips": "Skip problematic service trips",
      "skipTasksMissingLocation": "Skip tasks with missing location",
      "splitOnlyBySetCode": "Split only by set code",
      "title": "Fleet Control - Import Schedule",
      "unassignedDutiesInStack": "Put unassigned duties in stack",
      "unassignedVehiclesInStack": "Put unassigned vehicles in stack",
      "useActualTime": "Use actual time",
      "useImportedTripIds": "Use imported trip IDs",
      "vehiclePerDutyStretch": "Vehicle per duty stretch"
    }
  },
  "folderControls": {
    "addListTitle": "Add new {{type}} folder",
    "dataset": "Dataset",
    "schedule": "Schedule",
    "timeplan": "Timeplan"
  },
  "folders": {
    "move": {
      "hint": "Move \"{{name}}\" to:",
      "title": "Move selected item"
    },
    "noFolders": "No folders"
  },
  "footer": {
    "alerts": "ALERTS",
    "inUse": "IN USE",
    "standby": "STANDBY",
    "trips": "TRIPS"
  },
  "gantt": {
    "addTrip": "Add trip",
    "approval": {
      "confirmDiscard": "Are you sure you want to discard your changes?",
      "confirmTimeplanDiscard": "Discarding your changes may cause some duties or vehicles to move to the stack because your timeplan has been updated since the schedule changes were made.\n\nTIP: We recommend saving a copy of your schedule before discarding changes.",
      "discard": "Discard Changes",
      "save": "Apply Changes",
      "timeplanDiscardDisabled": "The schedule changes can't be discarded because your timeplan has been updated since those changes were made."
    },
    "dayoff": "DAY OFF",
    "guidetime": {
      "minutes": "m",
      "tooltip": "Double click to remove"
    },
    "linkDutiesHint": "Link this trip",
    "menu": {
      "crew": "Crew schedule",
      "dashboard": "Dashboard",
      "homeGantt": "Home (Gantt)",
      "mapView": "Map view",
      "reliefVehicles": "Relief vehicle schedule",
      "solutions": "Solutions",
      "vehicle": "Vehicle schedule"
    },
    "optimize": {
      "assignVehicles": "Assign vehicles",
      "discardWarning": "You haven't saved your changes. Do you want to discard changes?",
      "emptyStackDisableTooltip": "There are no available duties to optimize",
      "noOutput": "To enable optimization, select at least one \"optimize\" outcome from the optimization settings",
      "optibize": "Optimize",
      "requestParameters": {
        "assignVehiclesMode": "Mode",
        "assignVehiclesModeKinds": {
          "Full": "Full",
          "Quick": "Quick"
        },
        "createDuties": "Optimize duties",
        "createReliefVehicles": "Optimize relief vehicles",
        "createVehicles": "Optimize vehicles",
        "diagnoseDutyPool": "Diagnose duties optimization",
        "multiDay": "Multi service",
        "optibizeOutput": "Optimization output",
        "regenDutyIds": "Regeneration duty IDs",
        "regenKinds": {
          "All": "All",
          "Mismatch": "Mismatch",
          "Modified": "Modified",
          "New": "New",
          "No": "No"
        },
        "selectOutcomes": "Select the desired \"optimize\" outcomes:",
        "title": "Optimization settings"
      },
      "restoreDefault": "Restore default settings",
      "restoreMessage": "Are you sure you want to restore all settings to default?",
      "title": "Auto Schedule"
    },
    "orderTrips": "Order trips",
    "passengerWasUpdated": {
      "message": "This event was updated and the associated passenger trip was updated accordingly.",
      "title": "Event updated successfully"
    },
    "resetOrder": "Reset order",
    "rowView": {
      "columns": {
        "distance": "Distance",
        "duration": "Duration",
        "event": "Event",
        "from": "Start stop",
        "remove": "Delete",
        "route": "Route",
        "serial": "#",
        "times": "Start/end time",
        "to": "End stop"
      },
      "duty": "Duty",
      "open": "Open table view",
      "title": "{{type}} - ID {{id}}",
      "vehicle": "Vehicle"
    },
    "saveDeadhead": {
      "allDays": "All days",
      "cantSaveTitle": "To save the deadhead to the catalog, first save or cancel your changes",
      "confirmMsg": "Saving the deadhead to \"{{catalog}}\" may affect the current schedule and all schedules associated with this catalog. Are you sure you want to save the deadhead to the catalog?",
      "confirmMsgCatalogReplace": "The deadhead catalog preference is currently paused. To create a new catalog and save the deadhead to it, click Continue.",
      "confirmMsgNoCatalog": "There isn't a deadhead catalog associated with this schedule. Would you like to create a catalog and save the deadhead to it?",
      "errors": {
        "daysConflict": "This doesn't match the day(s) of the week associated with the deadhead ({{days}})",
        "distanceConflict": "This doesn't match the deadhead's distance {{distance}}",
        "distanceInvalid": "Distance must be a number",
        "invalidEndTime": "Invalid end time value",
        "invalidStartTime": "Invalid start time value",
        "noTripsMatch": "None of these trips match the deadhead you'd like to save, which starts at {{start}} and has a travel time of {{duration}}.",
        "requiredDistance": "Distance must be filled in",
        "requiredDuration": "Travel time must be filled in",
        "speedError": "Change travel time or distance to stay under {{speed}} {{units}}.",
        "timeAndDaysConflict": "The time of day and days of the week overlap",
        "timeRangeConflict": "Deadhead starts at {{start}}, which is out of this time range",
        "travelTimeAboveMaxError": "Travel time must be up to {{maximum}} minutes",
        "travelTimeConflict": "This doesn't match the deadhead's travel time {{duration}}",
        "travelTimeInvalid": "Travel time must be a number",
        "travelTimeNotInteger": "Travel time must be a whole number (no decimals)"
      },
      "header": "Define the time and day(s) of week that will be associated with the new deadhead.",
      "headerWithConflicts": "There are trips in the catalog that match the deadhead days and times. Add or edit the trips below as needed – just make sure the days and the start/end times don't overlap.",
      "newDeadheadButton": "+ NEW TRIP",
      "note": {
        "noConflictTrips": {
          "destinationIsPlace": "The deadhead in the schedule ends at a stop associated with a \"place\", and the trip saved to the catalog will end at that \"place\". ",
          "originAndDestinationArePlace": "The stops of the deadhead in the schedule are associated with \"places\", and the trip saved to the catalog will start/end at those \"places\".",
          "originIsPlace": "The deadhead in the schedule starts at a stop associated with a \"place\", and the trip saved to the catalog will start at that \"place\"."
        },
        "withConflictTrips": {
          "destinationIsPlace": "The deadhead in the schedule ends at a stop associated with a \"place\". Any trips added now will end at that \"place\". Download the catalog to make changes.",
          "originAndDestinationArePlace": "The stops of the deadhead in the schedule are associated with \"places\". Any trips added now will start/end at those \"places\". Download the catalog to make changes.",
          "originIsPlace": "The deadhead in the schedule starts at a stop associated with a \"place\". Any trips added now will start at that \"place\". Download the catalog to make changes."
        }
      },
      "status": {
        "existing": "Existing",
        "modified": "Modified",
        "new": "New"
      },
      "table": {
        "daysOfWeek": "Days of week",
        "distance": "Distance",
        "endTime": "End time",
        "placeholder": "No trip is defined. Click “+ New trip” to add a trip.",
        "startTime": "Departure time",
        "state": "State",
        "travelTime": "Travel time"
      },
      "title": "Save deadhead to catalog",
      "toast": {
        "deadheadEdited": {
          "body": "<a class=\"toast-link\" id=\"save_to_catalog\">Save the trip</a> to a deadhead catalog",
          "title": "Deadhead edited"
        },
        "savedToCatalog": {
          "body": "The deadhead was saved successfully to the catalog <a class=\"toast-link\" id=\"download_catalog\">{{catalogName}}</a>",
          "title": "Saved to catalog"
        },
        "savedToCatalogWarning": {
          "body": "The deadhead still doesn't match the catalog. Download the <a class=\"toast-link\" id=\"download_catalog\">catalog</a> to make the changes",
          "title": "Almost done"
        }
      }
    },
    "stack": {
      "dz": "Unassign trips here"
    },
    "stp": {
      "explanation": "Service duration times by percentage",
      "keyDuration": "Duration",
      "keyTitle": "Service time percentile",
      "title": "Service Time"
    },
    "swapRowHint": "Swap with this row",
    "timeplanViewLinkDisabledHint": "Trips can only be viewed together in the Timeplan if they are part of the same route or route group",
    "tooltip": {
      "addBoardingTime": "Add boarding time",
      "alightingTime": "Alighting time",
      "boardingTime": "Boarding time",
      "chargeSetupTime": "Setup",
      "costDif": "Cost difference",
      "customTypePlaceHolder": "Element name",
      "del": "Delete event",
      "delIdle": "Delete deadhead",
      "delTaxi": "Delete taxi",
      "doSort": {
        "button": "Sort",
        "title": "Perform sort"
      },
      "drivingTime": "Driving:",
      "duration": "Duration:",
      "edit": {
        "title": {
          "dutyLink": "View this trip in the crew schedule. (Duty {{id}})",
          "dutyPen": "Assign the trip to a different duty",
          "vehicleLink": "View this trip in the vehicle schedule. (Vehicle {{id}})",
          "vehiclePen": "Assign the trip to a different vehicle"
        }
      },
      "editColor": {
        "kinds": {
          "signCatalog": "Route",
          "signCatalog_direction": "Route & Dir",
          "signCatalog_direction_alternative": "Route, Dir & Alt"
        },
        "title": "Edit route color"
      },
      "endTime": "End",
      "energy": "Energy",
      "errorMsgs": {
        "distanceInvalid": "Distance must be a number",
        "evNoChargeMode": "No matching charger",
        "evNoLocation": "No matching charging station",
        "maxTimeError": "{{type}} time must be up to {{duration}} minutes (HH:MM)",
        "minTimeError": "{{type}} time must be at least {{duration}} minutes (HH:MM)",
        "noCharge": "No battery power",
        "overCharge": "Battery overcharged",
        "recharge": "Charging",
        "timeInvalid": "{{type}} time must be a number (HH:MM)",
        "travel": "Travel"
      },
      "errors": "Errors",
      "externalService": "External service",
      "fail": "Error retrieving data",
      "field": "Field",
      "foceRemoveTripMessage": "Force-deleting this event may corrupt the schedule. Are you sure you want to do this?",
      "forceRemoveTripTitle": "Delete an event",
      "from": "From: ",
      "hints": {
        "chargeBelowMin": "State of charge is below the minimum of {{minimum}}% defined in the Batteries preference.",
        "driverIsPartialTrip": "This event cannot be {{editType}} because it is assigned to a sub-trip.",
        "evPrefMissingBattery": "No matching battery in the preference",
        "evPrefMissingBatteryButton": "This recharge event could not be {{editType}} because the associated charging profile is not compatible with the vehicle’s battery",
        "evPrefMissingButton": "This recharge event could not be {{editType}} because there are no matching charger or charging station in the preference",
        "evPrefMissingLocation": "No matching charging station in the preference",
        "evPrefMissingMode": "No matching charger in the preference",
        "evPrefMissingNoAdd": "This recharge event could not be added because there are no matching charger or charging station in the preference",
        "evPrefMissingNoEdit": "This recharge event could not be saved because there are no matching charger or charging station in the preference",
        "hasPublicTravelPassengers": "This event cannot be {{editType}} because doing so would affect the assigned passengers. To {{editTypeVerb}} this event, first use the passenger list to locate and remove those passenger trips.",
        "helpers": {
          "add": "added",
          "assign": "assigned",
          "delete": "deleted",
          "deleteVerb": "delete",
          "edit": "edited",
          "editVerb": "edit",
          "merge": "merged",
          "move": "moved",
          "save": "saved"
        },
        "isPublicTransportFromCatalog": "This event cannot be {{editType}}. You can delete this event and create a new one with modified properties.",
        "isPublicTransportFromSchedule": "This event cannot be {{editType}}. You can {{editTypeVerb}} the associated trip, which will adjust this event accordingly.",
        "lockedVord": "This trip cannot be {{editType}} because either its duty or vehicle are locked.",
        "lockedVordModify": "This {{vordType}} cannot be edited because it is locked.",
        "partialTrip": "This event cannot be {{editType}} because it is a sub-trip.",
        "passengerLockedEdit": "The vehicle has {{count}} passengers and therefore cannot be {{editType}}; use the passengers list to remove each passenger by locating the taxi event and deleting it.",
        "passengerLockedEditOne": "The vehicle has a passenger and therefore cannot be {{editType}}; use the passenger list to remove it by locating the taxi event and deleting it.",
        "publicTravelLockedByOtherPassengers": "This event cannot be {{editType}}. You can {{editTypeVerb}} the associated trip, which will adjust this event accordingly. To {{editTypeVerb}} the associated trip you must first make sure that it has only one passenger by removing the additional passengers.",
        "reliefCarLocked": "This event cannot be {{editType}} because multiple passengers are scheduled and would be affected. Remove the passengers from this event, then {{editTypeVerb}} it. Or delete this event and create a new version.",
        "scheduleSyncLock": "This trip can be changed only in the timeplan.",
        "taxiCantEditDueToPassengers": "This taxi has more than one passenger and therefore cannot be {{editType}}.",
        "taxiLockedEdit": "The taxi has passengers and therefore cannot be {{editType}}; you can delete the event and add a new one with modified properties.",
        "travelDriverIsLocked": "This event cannot be {{editType}}. You can {{editTypeVerb}} the associated trip, which will adjust this event accordingly. To {{editTypeVerb}} the associated trip you must first unlock its duty.",
        "travelVehicleIsLocked": "This event cannot be {{editType}}. You can {{editTypeVerb}} the associated trip, which will adjust this event accordingly. To {{editTypeVerb}} the associated trip you must first unlock its vehicle and/or any duties using that vehicle."
      },
      "hLabel": "h",
      "influenceTrip": "Route {{sign}} at {{time}}",
      "linkToDuties": "View in crew schedule",
      "linkToVehicles": "View in vehicle schedule",
      "location": "Location:",
      "minLabel": "min",
      "mLabel": "m",
      "mode": "Mode: ",
      "moreInfo": "More details",
      "newDuty": "New Duty",
      "newVehicle": "New Vehicle",
      "nextDay": "Next day",
      "noData": "Data does not exist for this trip",
      "noSplits": "No splits",
      "note": "Note",
      "nothingToReset": "Nothing to reset",
      "orderTripsTitle": "Order the stack by route, direction and start time",
      "pending": "Pending...",
      "predictedOTP": "Predicted OTP",
      "prefGroup": "Pref. group:",
      "ranking": "Ranking",
      "removeTripMessage": "Are you sure you want to delete trip \"{{tripId}}\"?",
      "removeTripTitle": "Delete a trip",
      "requiresDutyCoverage": "Driver required",
      "resetMultiToExistingValues": "The value for one or more of the selected rows has been modified. Reset to calculated values",
      "resetSelection": "Reset",
      "resetToExistingValue": "Reset to calculated value",
      "saveToCatalog": "Save to catalog",
      "searchStops": "Search stops",
      "selectType": "Select type...",
      "serviceTimePercentile": "Service time percentile",
      "sortBy": {
        "button": "Sort by",
        "kinds": {
          "destination": "Destination",
          "destinationHint": "Trips with same destination sorted by their start time relative to this trip start time",
          "endsAtOrigin": "Ends at Orig",
          "endsAtOriginHint": "Trips that ends where this trip starts sorted by their end time relative to this trip start time",
          "origin": "Origin",
          "originAndDestination": "Orig & Dest",
          "originAndDestinationHint": "Trips with same origin and destination sorted by their start time relative to this trip start time",
          "originHint": "Trips with same origin sorted by their start time relative to this trip start time",
          "sign": "Route",
          "signAndDirection": "Route & Dir",
          "signAndDirectionHint": "Trips with same route and direction sorted by their start time relative to this trip start time",
          "signDirectionAndAlternative": "Route, Dir & Alt",
          "signDirectionAndAlternativeHint": "Trips with same route direction and alternative sorted by their start time relative to this trip start time",
          "signHint": "Trips with same route sorted by their start time relative to this trip start time",
          "startsAtDestination": "Starts at Dest",
          "startsAtDestinationHint": "Trips that starts where this trip ends sorted by their start time relative to this trip end time"
        },
        "title": "Choose properties to sort by"
      },
      "splitFrom": "Split from: ",
      "splitTo": "Split to: ",
      "startOTP": "Predicted OTP (start)",
      "startTime": "Start",
      "time": "Time",
      "to": "To: ",
      "toAssignAPassenger": "To assign a passenger to a specific trip, right-click the trip and select \"Add passenger\" from the menu",
      "unableToViewDuties": "Not supported as some or all of the vehicle's duties are in stack",
      "unableToViewVehicles": "Not supported as some or all of the duty's vehicles are in stack",
      "value": "Value",
      "values": {
        "alt": "Alt: ",
        "boarding": "Boarding: ",
        "catNum": "Catalog #",
        "days": "Days: ",
        "direction": "Direction: ",
        "dutyEfficiency": "Efficiency",
        "dutyId": "ID: ",
        "dutyIdFull": "Duty ID:",
        "dutyType": "Type: ",
        "eta": "ETA: ",
        "influenceTrips": "Influence trips: ",
        "overtime": "Overtime",
        "paidTime": "Paid Time",
        "paidTimeShort": "PT",
        "rosterDayons": "Working Days",
        "routeId": "Route ID: ",
        "serviceId": "Service ID: ",
        "sign": "Route: ",
        "tripId": "Trip ID: ",
        "type": "Type: ",
        "usedVehicles": "Used vehicles: "
      },
      "vehicleAndDriver": "Vehicle & Driver",
      "vehicleOnly": "Vehicle only",
      "vehicleTypes": "V. types: ",
      "vehicleValidationBlock": {
        "actCost": "Actual cost",
        "algCost": "Algorithmic cost",
        "duty": "Duty",
        "penaltyCost": "Penalty cost",
        "penaltyName": "Penalty name",
        "piece": "Piece"
      },
      "warning": "Warning",
      "warnings": "Warnings",
      "willAdjustAssociatedPassengerTrip": "Editing this event will adjust the associated passenger trip accordingly",
      "willCreateNewReliefCar": "Saving the changes will create a new relief car trip and assign this duty as a passenger"
    }
  },
  "ganttController": {
    "filter": "Filter",
    "layers": "Layers",
    "stats": "Stats"
  },
  "general": {
    "comingSoon": "Coming soon…",
    "days": "Days",
    "fullScreen": "Full screen",
    "history": "Schedule history",
    "no": "No",
    "redo": "Redo",
    "search2Placeholder": "Search",
    "searchPlaceholder": "Enter some keywords",
    "services": "Services",
    "undo": "Undo",
    "untitled": "Untitled",
    "yes": "Yes"
  },
  "generalSettings": {
    "flexibility": {
      "activeFlexTooltip": "Flexibility range: Maximum penalty of ${{maxPenalty}}.",
      "disabledFlexTooltip": "Add a flexibility range",
      "infoTooltip": "The outer limit beyond your preferred value, subject to the maximum penalty defined here.",
      "maxPenalty": "Penalty",
      "outerLimit": "Outer Limit",
      "title": "Flexibility Range"
    },
    "kpis": {
      "addRemove": "Add and Remove KPIs",
      "addRemoveText": "Select which KPIs to display",
      "selectAll": "Select All",
      "title": "KPI Configuration"
    },
    "manualEditing": {
      "title": "Manual Editing"
    },
    "onTime": {
      "prediction": {
        "descriptionOtp": {
          "line1": "On Time Performance (OTP) illustrates the probability of a service running on schedule.",
          "line2": "Enabling this feature marks any service with an OTP value lower than the defined threshold."
        },
        "descriptionStp": {
          "line1": "Service duration percentile is the probability of a service completing within its duration",
          "line2": "Enabling this feature marks any service that falls outside the defined percentile range."
        },
        "otpSliderTitle": "Predicted OTP threshold",
        "otpToggle": "Enable OTP prediction",
        "stpSliderTitle": "Service percentile range",
        "stpToggle": "Enable service duration prediction",
        "title": "Prediction Configuration"
      },
      "title": "On-Time"
    },
    "title": "General settings"
  },
  "generateIds": {
    "buttons": {
      "generate": "Generate"
    },
    "conflict": {
      "message": "Generating IDs will cause conflicts with existing IDs. To resolve this, the existing IDs will have an \"a\" added to the end (i.e., \"1\" will be changed to \"1a\"). Are you sure you want to continue?",
      "title": "Override existing {{type}} ID{{plural}}"
    },
    "dialog": {
      "digits": "digits",
      "header": "{{type}} ID Generator",
      "increment": "Increment",
      "minLength": "Minimum ID length",
      "optional": "(Optional)",
      "prefix": "Prefix",
      "sampleIds": "Sample IDs:",
      "startFrom": "IDs start from",
      "tooltips": {
        "increment": "Define the increment by which the IDs will increase. For example, if set at 2, the first digit of each ID will increase by two (1, 3, 5, etc.).",
        "minLength": "Zeros will be added before the ID if it is shorter than the specified number of digits (not including the prefix). Any leading zeros will appear after the prefix."
      }
    }
  },
  "gtfsImport": {
    "downloadFile": "Download gtfs file",
    "error": "Error importing GTFS",
    "operatorsFound": "Operators found in",
    "searchBy": "Search by location or operator",
    "searchInfo": "To create a schedule, search and choose an operator",
    "searchResults": "Search results:"
  },
  "gtt": {
    "confirm_dialog": {
      "message": "Some of the trips defined have invalid running times. Fix the running times in order to view them in the Graph",
      "title": "Warning"
    },
    "resetZoom": "Reset zoom",
    "tooltip": {
      "departure": "Departure",
      "direction": "direction",
      "pattern": "pattern",
      "time": "time",
      "tripId": "Trip id",
      "vehicleId": "Vehicle id"
    }
  },
  "home": "Home",
  "importData": {
    "atLeastTwoTimepoints": "Route must have at least two timepoints",
    "duplicateId": "Id must be unique: \"{{id}}\" appears in the following rows: {{rowsList}}",
    "emptyHeader": "The stop properties can't be imported because the sheet is missing header(s) or there are invalid header names.",
    "emptyHeaderOnSheet": "Missing header(s) or there are invalid header names at {{emptyHeaders}} on {{sheetName}}",
    "emptyHeaderWithDescription": "Missing header(s) or there are invalid header names at {{emptyHeaders}}",
    "expectHeader": "The first row should be the captions. The following captions are mandatory:",
    "expectHeaderWithDescription": "The first row should be the captions. The following captions are mandatory: {{expected}}",
    "infiniteLatLng": "Invalid location: \"{{cell}}\", is not a finite number",
    "invalidLatLng": "Invalid location: \"{{cell}}\"",
    "lookupField": "This cell has lookup-function",
    "missingMandatoryData": "Missing mandatory data",
    "missingStop": "Missing stop code",
    "placeToPlace": "Stop with place can't point to a stop with place: {{id}}",
    "problematicSheet1": "The invalid/missing headers are on Sheet ",
    "problematicSheet2": " of the file.",
    "rowNum": "Row #",
    "scheduleImportSummary": {
      "message": {
        "added_trips_plural": "{{tripsCount}} trips were added",
        "added_trips_singular": "{{tripsCount}} trip was added",
        "deleted_trips_plural": "{{tripsCount}} trips were deleted",
        "deleted_trips_singular": "{{tripsCount}} trip was deleted",
        "modified_trips_plural": "{{tripsCount}} trips were modified",
        "modified_trips_singular": "{{tripsCount}} trip was modified"
      },
      "scheduleImportLayerLink": "View deleted trips on schedule",
      "scheduleImportToastTitle": "Schedule imported successfully"
    },
    "sheet": "Sheet #",
    "stopIdContainDot": "Stop ID may not contain \".\" (dot character): \"{{cell}}\"",
    "stopIdContainsInvalidChars": "Stop ID may not contain special chars: \"{{cell}}\"",
    "typeMismatch": "Type mismatch. The following type is expected:"
  },
  "importDialog": {
    "buttons": {
      "close": "Close",
      "downloadAsCSV": "Download as CSV",
      "hideDetails": "Hide details",
      "showAllDetails": "Show details",
      "showMaxVisibleDetails": "Show {{number}} issues"
    },
    "message": "The catalog \"{{catalogName}}\" could not be imported because {{errorCount}} issues were found with the file. Edit the catalog to fix the issues. Then import it again.",
    "showTopErrsMsg": "The first {{maxCount}} issues appear below. To view them all, download as a CSV.",
    "title": "Catalog could not be imported"
  },
  "importRoute": {
    "clearSelection": "Clear selection",
    "confirmationModal": {
      "title": "Duplicate route name detected"
    },
    "dontImport": "Don't import",
    "from": "FROM",
    "importRouteTitle": "Import Route",
    "noRoutes": "There aren't any routes in the timeplan you selected. Click \"Back\" to select another timeplan.",
    "routeModal": {
      "buttons": {
        "apply": "apply",
        "next": "next"
      },
      "title": "Edit Route {{routeName}}"
    },
    "serviceEmpty": "The route you are importing has no services.",
    "serviceIds": "Service IDs",
    "serviceidsTitle": " Match the service IDs from the original route with the imported route. This will copy all trips and running times associated with the service ID.",
    "success": {
      "message": "Route/s imported successfully",
      "title": "Import Route"
    },
    "to": "TO",
    "validation": {
      "routeExist": "The name assigned to the following route(s) already exists in the current timeplan: [{{routes}}]. Click continue to assign a unique name to each route."
    },
    "vehiclesEmpty": "The route you are importing has no vehicles.",
    "vehicleTypeIds": "Vehicle Types",
    "vehicleTypesTitle": " Match the vehicle type from original route with imported route."
  },
  "indications": {
    "duties": "duties",
    "saved": "Saved",
    "savedTip": "Your changes were automatically saved.",
    "saving": "Saving...",
    "showing": "Showing",
    "unscheduled": "unscheduled",
    "vehicles": "vehicles"
  },
  "insights": {
    "colgen_convergence_level": {
      "message": "Advanced fixed blocks convergence level - number of duty candidates left below threshold: {{number_of_duties_below_threshold}}"
    },
    "colgen_not_converging_max_duties": {
      "details": "Advanced fixed blocks has reached the maximal duties number of {{total_max_duties}}",
      "message": "Duty optimization process didn't reach an optimal solution"
    },
    "colgen_not_converging_max_time": {
      "details": "Advnaced fixed blocks algorithm has reached the maximal run time of {{total_max_time}} seconds",
      "message": "Duty optimization process didn't reach an optimal solution"
    },
    "create_duties_duration": {
      "message": "Finished creating crew schedule. Duration: {{run_time}}"
    },
    "create_vehicles_duration": {
      "message": "Finished creating vehicle schedule. Duration: {{run_time}}"
    },
    "duty_recut_iteration_duration": {
      "message": "Finished a duties recut iteration. Duration: {{run_time}}"
    },
    "lagrange_far_from_convergence": {
      "message": "Advanced depot allocation is far from reaching an optimal solution"
    },
    "lagrange_not_converging_max_iterations": {
      "details": "Advanced depot allocation algorithm has reached the maximal iterations number of {{max_iterations}}",
      "message": "Advanced depot allocation process didn't reach an optimal solution"
    },
    "lagrange_not_converging_max_time": {
      "details": "Advanced depot allocation algorithm has reached the maximal run time of {{total_max_time}} seconds",
      "message": "Advanced depot allocation process didn't reach an optimal solution"
    },
    "lagrange_not_converging_no_improvement": {
      "details": "Advanced depot allocation algorithm has not improved for the last {{max_no_improvement_iterations}} iterations",
      "message": "Advanced depot allocation process didn't reach an optimal solution"
    },
    "number_of_duty_candidates": {
      "message": "Number of duty candidates in preference group {{pref_group_id}}: {{number_of_duty_candidates}}"
    },
    "number_of_duty_pieces": {
      "message": "Number of duty pieces: {{number_of_pieces}}"
    },
    "number_of_vehicle_pieces": {
      "message": "Number of vehicle pieces: {{number_of_pieces}}"
    }
  },
  "jobList": {
    "cancel": "Cancel",
    "cancelJobDialogMessage": "Are you sure you want to cancel this task?",
    "cancelJobDialogTitle": "Cancel a task",
    "current": "Last 24 hours",
    "defaultLog": "Optimizing...",
    "dialogTitle": "Tasks",
    "elapsedTime": "Elapsed time",
    "history": "History",
    "id": "ID",
    "jobAborted": "Task was aborted",
    "jobCanceledBy": "Task was canceled by {{name}}",
    "jobComplete": "Task completed successfully",
    "jobFailed": "Task failed",
    "jobTimeOut": "Task timed out",
    "mine": "My tasks",
    "noJobs": "No tasks",
    "remove": {
      "text": "Are you sure you want to delete task \"{{name}}\"?",
      "title2": "Delete a task"
    },
    "retryJobDialogMessage": "Are you sure you want to retry this task?",
    "retryJobDialogTitle": "Retry a task",
    "taskName": {
      "roster_schedule": "Roster: {{scheduleName}}",
      "schedule": "Schedule: {{scheduleName}}",
      "schedule_with_service": "Schedule: {{scheduleName}} | Service: {{serviceName}}",
      "schedule_with_service_history": "{{scheduleName}} ({{serviceName}})"
    },
    "taskType": {
      "roster": "Roster schedule",
      "schedule": "Schedule",
      "timeplan": "Timeplan",
      "timetable": "Timetable",
      "weekly": "Weekly schedule"
    },
    "user": "User",
    "userAborted": "User canceled"
  },
  "keyVal": {
    "add": "Add (key:value) item",
    "key": "Key",
    "val": "Value"
  },
  "kpis": {
    "alternativeTrips": {
      "passengers": "{{count}} Passengers"
    },
    "average": "Average",
    "crewAlgorithmicCost": {
      "penaltyCost": "(G. Constraint + Duty Penalty + Duty Cost)"
    },
    "crewChangeover": {
      "duringSplit": "During split: {{count}}"
    },
    "crewEfficiency": {
      "value": "(Driving Time / Paid Time): {{total}} / {{paid}}"
    },
    "crewSplitCount": {
      "time": "Time: {{time}} h | {{percentage}}% of Duties"
    },
    "delta": {
      "better": "better",
      "full": "{{value}} {{betterWorse}} than the previous saved schedule.",
      "less": "less",
      "more": "more",
      "worse": "worse"
    },
    "hours": "(hours)",
    "model": {
      "algorithmicCostTypes": "Algorithmic Cost",
      "allDays": "All Days",
      "alternativeTripCount": "Low Impact Trips",
      "alternativeTripsCost": "Low Impact Cost",
      "alternativeTripsRevenue": "Low Impact Revenue",
      "averagePaidTime": "Average Paid Time",
      "changeover": "Changeover",
      "coverage": "Coverage",
      "crewAlgorithmicCost": "Crew Algorithmic Cost",
      "crewEfficiency": "Crew Efficiency",
      "drivingTime": "Driving Time",
      "duties": "Duties",
      "dutiesLength": "Duties Paid Time",
      "dutyTypes": "Duty Types",
      "emissionsSaved": "CO&#8322; Emissions Saved",
      "otpCost": "OTP Penalty Cost",
      "paidTime": "Paid Time",
      "platformTime": "Platform Time",
      "predictedOTP": "Predicted OTP",
      "prefGroups": "Duty Preference Groups",
      "prefGroupsDefault": "Default",
      "profit": "Profit",
      "reliefTripCount": "Relief Trips",
      "reliefVehicleDistanceTime": "Relief Trip Distance",
      "reliefVehicles": "Relief Vehicles",
      "reliefVehicleTotalCost": "Relief Vehicle Total Cost",
      "revenue": "Revenue",
      "rosterAlgorithmicCost": "Algorithmic Cost",
      "rosterGuaranteedTime": "Guaranteed Time",
      "rosterGuaranteedTimes": "Roster Guaranteed Time",
      "rosterOverTime": "Overtime",
      "rosterPaidTimes": "Roster Paid Time",
      "rosters": "Rosters",
      "rosterStandbyTimes": "Standby tasks / total tasks",
      "rostersTypes": "Roster Types",
      "rosterTotalCost": "Total Cost",
      "serviceTimePercentile": "Service Time Percentile",
      "splitCount": "Split Count",
      "spreadTime": "Spread Time",
      "standbyTime": "Standby Time",
      "taxiTime": "Taxi Time",
      "timeplanTotalTripsCount": "Number of trips",
      "timeplanTripsPerHour": "Trip Count by Hour",
      "timeplanTripsPerHourSub": "(Throughout the day)",
      "timeplanTripsPerRoute": "Trip Count by Pattern",
      "timetableTotalTripsCount": "Trips",
      "timetableTripsPerHour": "Trip Count By Hour",
      "timetableTripsPerRoute": "Route Trips Count",
      "total": "Total",
      "totalCost": "Total Cost",
      "vehicleEfficiency": "Vehicle Efficiency",
      "vehicles": "Blocks",
      "vehicleTypes": "Vehicle Types",
      "workTime": "Work Time"
    },
    "onTime": {
      "coverage": "Coverage",
      "otp": "(On-Time Performance)",
      "qualityOfService": "(Quality of Service)"
    },
    "reliefVehicles": {
      "deadheadDistance": "Deadheads: {{distance}}",
      "passengers": "{{count}} Passengers (Ratio: {{ratio}})",
      "reliefTripDistance": "Relief Trip Distance ({{time}} h)",
      "totalCost": "Crew {{crewCost}}/Vehicles {{vehicleCost}}"
    },
    "rosterTotalCost": {
      "baseSalary": "Base",
      "overTime": "Overtime"
    },
    "taxi": {
      "dist": "Distance",
      "hours": "(hours)"
    },
    "totalCost": {
      "crew": "Crew",
      "estimatedCrew": "Est. Crew",
      "vehicles": "Vehicles"
    },
    "vehicleEfficiency": {
      "deadheads": "Deadheads",
      "service": "Services"
    },
    "vehicles": {
      "pvr": "(PVR: {{pvr}})"
    },
    "weeklyToggle": {
      "allWeeks": {
        "hint": "View total KPIs for all weeks",
        "title": "All weeks"
      },
      "currentWeek": {
        "hint": "View KPIs for this week",
        "title": "This week"
      }
    }
  },
  "kpisOnGantt": {
    "algorithmic_cost": "Algorithmic cost",
    "battery_type": "Battery",
    "compensation_time": "Compensation time",
    "days_off": "Days off",
    "depots": "Depots",
    "depot_pull_distance": "Depot pull distance",
    "depot_pull_time": "Depot pull time",
    "driving_distance": "Distance",
    "driving_time": "Driving time",
    "duty_comment": "Duty comment",
    "duty_type": "Duty type",
    "d_standby_time": "Standby time",
    "end_station": "End point",
    "end_time": "End time",
    "estimated_crew_cost": "Estimated crew cost",
    "fieldChooser": {
      "reset": "Reset",
      "searchPlaceholder": "Search stats...",
      "title": {
        "duties": "Select Duty Stats",
        "rosters": "Select Roster Stats",
        "vehicles": "Select Vehicle Stats"
      }
    },
    "first_direction": "First trip direction",
    "first_origin": "First trip origin",
    "guarantee_time": "Guarantee time",
    "idle_trip_cost": "Deadhead cost",
    "idle_trip_distance": "Deadhead distance",
    "idle_trip_distance_cost": "Deadhead distance cost",
    "idle_trip_time": "Deadhead time",
    "idle_trip_time_cost": "Deadhead time cost",
    "length": "Spread",
    "margin": "Margin",
    "maximum_start_time": "Latest start time",
    "minimum_start_time": "Earliest start time",
    "optional_paid_time": "Star day paid time",
    "otp_cost": "OTP penalty cost",
    "overtime": "Overtime",
    "paid_time": "Paid time",
    "penalty_cost": "Penalty cost",
    "platform_time": "Platform time",
    "platform_time_cost": "Platform time cost",
    "predicted_otp": "Predicted OTP",
    "pref_group": "Preference group",
    "profit": "Profit",
    "relief_trip_distance_cost": "Relief trip distance cost",
    "revenue": "Revenue",
    "roster_type": "Roster type",
    "route_count": "Route count",
    "score": "Score",
    "service_trip_cost": "Revenue cost",
    "service_trip_distance": "Revenue distance",
    "service_trip_percentile": "Service trip percentile",
    "service_trip_time": "Revenue time",
    "sign_off_time": "Sign-off time",
    "sign_on_time": "Sign-on time",
    "split_count": "Split count",
    "split_duration": "Split duration",
    "standby_tasks_count": "Standby count",
    "start_station": "Start point",
    "start_time": "Start time",
    "start_time_max_difference": "Start time max difference",
    "total_distance": "Distance",
    "total_standby_time": "Standby time",
    "unique_duty_count": "Unique duty count",
    "vehicle_type": "Vehicle type",
    "v_standby_time": "Layover time",
    "work_time": "Work time"
  },
  "layersControl": {
    "breakDuration": "Break Duration",
    "deletedTrips": "Deleted Trips",
    "highlightDayOff": "Highlight Day Off",
    "importChanges": {
      "added_trips_plural": "{{tripsCount}} trips added",
      "added_trips_singular": "{{tripsCount}} trip added",
      "deletedTripsLayerHint": "Trips that are part of the imported schedule, but not part of this schedule",
      "deleted_trips_plural": "{{tripsCount}} trips deleted",
      "deleted_trips_singular": "{{tripsCount}} trip deleted",
      "modified_trips_plural": "{{tripsCount}} trips modified",
      "modified_trips_singular": "{{tripsCount}} trip modified"
    },
    "patternBackground": "Roster Cycle Background",
    "sign": "Route",
    "startEndStops": "Start & End Stops",
    "startEndTime": "Start & End Time",
    "types": {
      "between_trips": "Between Trips",
      "import_changes": "Import Changes",
      "task_background": "Task Background",
      "trips": "Trips"
    }
  },
  "list": {
    "add": "Add Item",
    "remove": "Remove",
    "upload": "Upload files",
    "uploaded": "File uploaded: "
  },
  "loading": {
    "buildDuties": "Building duties…",
    "buildReliefVehicles": "Building relief vehicles…",
    "buildRosters": "Building rosters…",
    "buildVehicles": "Building vehicles…",
    "drawingTrips": "Drawing trips...",
    "message": "Loading...",
    "plsWait": "Please wait",
    "schedule": "Building schedule…",
    "shareDBSave": "Please wait while your changes are being saved",
    "syncing": "Syncing..."
  },
  "login": {
    "captchaFailed": "Please verify that you are not a robot",
    "email": "Email",
    "errors": {
      "no_user": "Looks like there isn't an account associated with this email address. Enter the email associated with your Optibus account or contact <a href=\"mailto:support@optibus.com?subject=User not found: {{name}}\">support@optibus.com</a> for assistance.",
      "reset_error": "Error resetting password. Please try again.",
      "short_description": "We couldn't find an account with that email/password. Forgot your password? {{resetLink}}",
      "unknown": "Error logging in. Please try again."
    },
    "explain": "Enter your email address below and we'll get you back on track.",
    "forgotPassword": "Forgot password?",
    "logout": "Log out",
    "password": "Type your password",
    "passwordEmpty": "Password required",
    "privacyPolicy": {
      "link": "Privacy Policy",
      "text": "I agree to the"
    },
    "reset": "Reset it",
    "resetPassword": "Reset your password",
    "send": "Send",
    "signIn": "Sign in",
    "successPass": "We sent a link to {{email}}. To reset your password, check your inbox and click the link.",
    "title": "Log in",
    "username": "Type your email",
    "usernameEmpty": "Email address required"
  },
  "map": {
    "addStop": "Add stop",
    "addStopToCatalog": {
      "error": {
        "dot": "ID can't contain periods (.)",
        "empty": "Enter a stop ID",
        "invalidChars": "ID can't contain special chars",
        "uniq": "Stop ID must be unique"
      },
      "warning": "Stop IDs can't be changed once they have been saved.",
      "warningTitle": "Save stop ID?"
    },
    "addStopToSegmentHint": "Hover over the route segment you want to add the stop to, then click to add the stop.",
    "buttons": {
      "freedraw": "Click here or hold the \"F\" key to switch to free-draw mode",
      "freeDrawToast": "The shape generated on the road is too far from the stop. Either use free draw mode to plot the route or contact support",
      "recenter": "Re-center",
      "roadmap": "Map",
      "satellite": "Satellite",
      "showAllStops": "Show or hide all stops",
      "showCensus": "Show or hide census data",
      "showGis": "Show or hide Custom Map Layers",
      "showMainPattern": "Show or hide main route",
      "showRoutes": "Show or hide other routes"
    },
    "cancelLocate": "Cancel will keep the previous location",
    "cancelMove": "Cancel will return to {{address}}",
    "census": {
      "infoWindow": {
        "noDataLabel": "NO DATA AVAILABLE",
        "percentageLabel": "PERCENT OF {{geographicAreaType}} RESIDENTS IN CATEGORY",
        "residenceInCategory": "NUMBER OF RESIDENTS IN CATEGORY",
        "totalPopulationLabel": "TOTAL POPULATION OF {{geographicAreaType}}"
      },
      "panel": {
        "description": "Select category to see related metrics",
        "hints": {
          "legend": "Methodology: Quantile (equal count) classification"
        },
        "kpis": {
          "numberOfResidents": {
            "hint": "Living near a stop is defined by default as a distance of ¼ mile (400 meters). You may redefine this distance.",
            "text": "Residents in selected category who live near stops on route"
          },
          "percentOfResidents": {
            "text": "Percent of residents near stops who are in selected category"
          },
          "percentOfRouteLength": {
            "text": "Percent of total route length in shaded {{geographicAreaType}}"
          },
          "routeLengthInDemCat": {
            "hint": "Shaded areas on the map represent {{geographicAreaType}} populated by the category you select",
            "text": "Route length in shaded {{geographicAreaType}}"
          },
          "title": "Metrics"
        },
        "legendTitle": "LEGEND",
        "manageCategories": "Manage categories",
        "manageLayers": {
          "confirmationModal": {
            "info": "Info",
            "message": "Changes will affect demographic layers in all timeplans in this project"
          },
          "setStateAndCounties": {
            "actionText": "Set state and counties:",
            "counties": {
              "placeholder": "Select County",
              "title": "County name"
            },
            "description": "Select state and county name to apply the census categories on them",
            "noCounties": "There are no selected counties",
            "state": {
              "title": "State"
            },
            "title": "Set state and county name"
          },
          "table": {
            "blockGroup": "Block Group",
            "censusTracts": "Census tracts",
            "confirmDelete": {
              "message": "Are you sure you want to delete this demographic category? Deleting the category will remove it from the map.",
              "title": "DELETE CATEGORY"
            },
            "description": "Description",
            "emptyListMessage": "There are no layers to show.",
            "geographicArea": "Geographic area",
            "mapKey": "Map key",
            "mapKeyTitle": "Edit map color for this category",
            "name": "Name",
            "surveyCodes": {
              "hint": "Format",
              "seeList": "See ACS survey codes",
              "title": "Survey codes",
              "tooltip": "Enter the American Community Survey code(s) for the category you selected. Use the plus sign to add a code and the minus sign to exclude a code, in this format: +(B01001_001E), -(B01001_007E)."
            },
            "threshold": {
              "title": "Threshold",
              "tooltip": "Minimum population threshold for selected category. Select a threshold percentage or a raw number (\"less than,\" \"greater than\")."
            },
            "title": "DEMOGRAPHIC CATEGORIES"
          },
          "title": "Manage categories"
        },
        "title": "IMPACT ANALYSIS"
      },
      "placeholders": {
        "selectCounties": "Select Counties",
        "selectState": "Select State"
      },
      "shapes": {
        "clickHereImportShapes": "Click here to import shapes",
        "importing": "Importing...",
        "lastUpdated": "Last updated shapes date",
        "noShapesFiles": "The shapes files for the selected state is not imported yet."
      },
      "totalPopulationLabel": "TOTAL POPULATION"
    },
    "confirmReroute": {
      "message": "Resetting the route will delete the existing map shape. The new route will be based on the Google routing engine.",
      "title": "Reset route?"
    },
    "confirmStopSelectionTitle": "Add the stop?",
    "confirmUpdateStopLocationTitle": "Confirm Update Stop Location",
    "copySegments": {
      "confirm": {
        "ok": "Yes, copy shape",
        "text": "Copying the route shape from a different pattern will override the existing shape.",
        "title": "Copy shape?"
      },
      "next": "Next segment",
      "noPatterns": "Main",
      "okInfo": "You can only copy the segments which have a similar stop sequence as the selected stop/next stop/previous stop",
      "prev": "Previous segment",
      "routeDescr": "Select route and pattern to copy from",
      "routeTitle": "Route and pattern",
      "segmentDescr": "Select which segment to replace",
      "segmentTitle": "Segment",
      "title": "Copy segment from",
      "warningInfo": "We didn't found similar stop sequences as the source pattern"
    },
    "dragDropStop": "Drag and drop the stop",
    "drawingLayer": "Drawing layer...",
    "dropzoneTooltip1": "Drop here to add \"",
    "dropzoneTooltip2": "\" to the route",
    "dropzoneTooltip2ToMain": "\" to the main route",
    "gis": {
      "add": "Add GIS layer",
      "description": "Select GIS layers to view on the map",
      "dialog": {
        "addBtn": "Add layer",
        "addTitle": "Add GIS layer",
        "centerHint": "Zoom on layer",
        "delBtn": "Delete layer",
        "delConfirmDescr": "The GIS layer will be deleted from the project and no longer available for viewing on the map",
        "delConfirmOk": "Yes, delete layer",
        "delConfirmTitle": "Delete GIS layer?",
        "descr": "Description",
        "descrHint": "View this description in the Custom Map Layers panel by hovering over the \"i\" icon next to the layer name",
        "descrPlaceholder": "Enter Description",
        "dragHint": "Drag layer to reorder",
        "editHint": "Edit layer",
        "editTitle": "Edit GIS layer",
        "file": "GIS file",
        "fileInvalid": "Invalid file",
        "fileMandatory": "Please select a file",
        "fileName": "File name",
        "fillColor": "Fill Color",
        "layerTitle": "GIS layer",
        "lineColor": "Border Color",
        "lineWidth": "Border Width",
        "name": "Name",
        "nameHint": "This name will be used in the Custom Map Layers panel",
        "namePlaceholder": "Enter name",
        "preview": "Style preview",
        "styleTitle": "Layer style",
        "supportedFiles": "Supported file",
        "transparency": "Transparency",
        "uploadErrorMessage": "The uploading process failed. Please contact support.",
        "uploadErrorTitle": "Layer could not be uploaded"
      },
      "noDescription": "No description provided",
      "noProperties": "There are no properties",
      "noResults": "No GIS layer to display",
      "properties": "Shape Properties",
      "title": "Custom Map Layers"
    },
    "inactiveStop": "The stop \"{{stop_name}}\" is flagged as deleted in the NaPTAN database.",
    "layers": {
      "census": "Show census layer",
      "descr": "Show and hide data on the map",
      "mainPattern": "Main pattern",
      "stops": "All stops",
      "title": "Map Layers"
    },
    "loadingCensusData": "Loading census data...",
    "loadingGisData": "Loading layers data...",
    "loadingRoutesData": "Loading routes data...",
    "loadingSegmentsData": "Search relevant segments...",
    "loadingStops": "Loading stops...",
    "onlyMain": {
      "addStop": "Add stop to route",
      "addStopToMain": "Add stop to main route",
      "toast": "Hold down Alt key to add the stop only to main route"
    },
    "redrawingGis": "Re-drawing layers...",
    "removingLayer": "Removing layer...",
    "routePanel": {
      "3dOptions": {
        "reroute": "Reset entire route"
      },
      "addStop": "Add Stop",
      "cancel": "cancel",
      "drawingMode": "Drawing mode",
      "emptyDirection": "Plot a route on the map using the draw mode or add a stop from the stop catalog",
      "startDraw": "Draw",
      "stops": "stops"
    },
    "routesPanel": {
      "description": "Select routes to display",
      "search": "Search",
      "selectAction": "Select all ({{checked}} of {{all}})",
      "setActive": "Set as Active",
      "title": "ROUTES",
      "unselectAction": "Unselect all ({{checked}} of {{all}})"
    },
    "searchBox": {
      "googleResults": "Places",
      "noResults": "No results found",
      "searchStopsPlaces": "Search stops and places",
      "stopsCatalogResults": "Stop Catalog"
    },
    "stopIsFarFromShape": "Adding the stop to this route may change the underlying map shapes of all associated route patterns if the stop falls outside their existing shapes.</br></br></br>In that case, you will need to manually adjust either the changed shapes or the stop so that the stop falls within the shape.",
    "stopPanel": {
      "3dOptions": {
        "addToRoute": "Add stop to route",
        "copySegments": "Copy segments",
        "delete": "Delete",
        "removeFromRoute": "Remove stop from route",
        "snapToRoad": "Reset route segments",
        "snapToRoadHint": "The existing route segments right before and right after the stop will be deleted and reset. The new segments will be based on the Google routing engine.",
        "updateLocation": "Move stop"
      },
      "backToRoute": "BACK",
      "deleteStop": {
        "confirmMessage": "Are you sure you want to delete stop \"{{stopName}}\"? It will be removed from the master table",
        "confirmTitle": "Delete stop"
      },
      "id": "ID",
      "location": "Location",
      "pattern": "Pattern",
      "renameTooltip": "Editing the stop name here will change it in the stop list",
      "stopProperties": "Stop Properties",
      "stopPropertiesOnRoute": "Route Specific Stop Properties",
      "stopPropertiesReLink": "Restore & link",
      "timepoint": "Timepoint"
    },
    "unknownAddress": "Unknown",
    "updateStopWarning": "Updating the location of this stop will affect all routes that start or end at this stop or pass through it, in all timeplans in this project. Are you sure you want to continue?"
  },
  "meta": {
    "doubleString": {
      "description": "Description",
      "keyCode": "{{key}} code"
    }
  },
  "metas": {
    "defaultModalHeader": "Advanced Settings",
    "routeAdvanced": {
      "modalHeader": "Route Advanced Settings"
    },
    "serviceIdAdvanced": {
      "modalHeader": "Service ID Advanced Settings"
    },
    "timetableViewModalHeader": "Timetable Advanced Settings"
  },
  "metaSettingsModal": {
    "addNew": "+ Add New",
    "configuration": "Configuration",
    "deleteInstanceMessage": "Are you sure you want to delete \"{{instanceName}}\"? It will be removed from the system entirely.",
    "deleteInstanceTitle": "Delete {{instanceName}}",
    "duplicateNameError": "Name should be unique",
    "emptyName": "The name can't be empty",
    "emptyNameError": "Name can't be empty",
    "nameExists": "Name is already in use"
  },
  "minMax": {
    "max": "Max:",
    "min": "Min:"
  },
  "missing": {
    "direction": "Missing direction",
    "pattern": "Missing pattern",
    "route": "Missing route",
    "service": "Missing service"
  },
  "modularModal": {
    "apply": "Apply",
    "cancel": "Cancel",
    "clear": "Clear",
    "clearFilter": "Clear filter",
    "filter": "Filter",
    "of": "({{num1}} of {{num2}})",
    "placeHolder": "Search",
    "reset": "Reset",
    "selectAll": "Select all",
    "sortBy": "Sort by"
  },
  "modulesNav": {
    "ds": "Scheduling",
    "dsTip": "Datasets and schedules",
    "rs": "Rostering",
    "rsTip": "Datasets and rosters",
    "tp": "Planning",
    "tpTip": "Timeplans"
  },
  "multiActionBar": {
    "assignEmpty": "Assign duties to empty days",
    "assignRows": {
      "allAssignedMessage": "Duties assigned to {{modifiedCellCount}} empty days",
      "allAssignedTitle": "Duties assigned successfully",
      "noDutiesInStack": "There are no duties in the stack",
      "noEmptyDays": "There are no empty days",
      "noneAssignedMessage": "There are no duties in the stack to assign to empty days",
      "noneAssignedTitle": "No duties were assigned",
      "someAssignedMessage": "Duties assigned to {{modifiedCellCount}} empty days, {{unmodifiedCellCount}} days remain empty",
      "someAssignedTitle": "Duties assigned successfully",
      "titleHint": "To determine which duties get assigned first, filter the unassigned duties in the stack and sort in ascending or descending order"
    },
    "batchEditDescription": "Batch edit mode",
    "clearAll": "Clear duties and days off",
    "clearDuties": "Clear duties",
    "deleteWarning": "Deleting this row will remove it from the roster and move all the assigned duties to the stack.",
    "deleteWarningPlural": "Deleting these rows will remove them from the roster and move all their assigned duties to the stack.",
    "multiWeek": {
      "assignEmpty": "Assign duties to empty days on this week",
      "clearAll": "Clear duties and days off on all weeks",
      "clearDuties": "Clear duties on all weeks",
      "deleteWarning": "Deleting this row will remove it from all roster weeks and move all their assigned duties to the stack.",
      "deleteWarningPlural": "Deleting these rows will remove them from all roster weeks and move all their assigned duties to the stack."
    },
    "none": "None",
    "rowSelected": "{{num}} row selected",
    "rowSelectedPlural": "{{num}} rows selected",
    "tooltip": {
      "assignTrips": "Assign trips",
      "cantMoveLockedRows": "Locked rows can't be moved",
      "confirmDelete": "Yes, delete rows",
      "delete": "Delete",
      "deleteConfirmTitle": "Delete selected rows?",
      "editMeta": "Batch edit",
      "editSpan": "Edit cycle segment",
      "generateIds": "Generate IDs",
      "inactiveMoveToStack": "Locked rows can't be moved to stack",
      "lock": "Lock/unlock",
      "move": "Move",
      "moveToStack": "Move to stack",
      "selectionClear": "Clear selection",
      "unassignTrips": "Unassign trips"
    }
  },
  "newTrip": {
    "autoId": "auto ID",
    "coordinates": "Coordinates:",
    "isCircular": "Circular",
    "lat": "Latitude",
    "lng": "Longitude",
    "newSign": "New",
    "newStop": "New",
    "stopId": "ID:"
  },
  "ontime": {
    "eta": "ETA",
    "kpis": {
      "deadheadDistance": "Deadheads Distance",
      "deadheadTime": "Deadheads Time",
      "driversCost": "Drivers Cost",
      "dutyCount": "Duty Count",
      "totalCost": "Total Cost",
      "vehicleCount": "Vehicle Count"
    },
    "solutions": {
      "abort": "Abort",
      "accept": "Accept",
      "confirmation": {
        "abort": {
          "line1": "Not all drivers were notified that the solution was aborted.",
          "line2": "Are you sure you want to abort?"
        },
        "resolve": {
          "line1": "Not all drivers were notified about the change.",
          "line2": "Are you sure you want to resolve?"
        }
      },
      "resolve": "Resolve",
      "solutionChanges": {
        "addedTrip": "Trip of route {{sign}} was added at {{startTime}} from {{from}} to {{to}}",
        "substructedTrip": "Trip of route {{sign}} was canceled at {{startTime}} from {{from}} to {{to}}"
      }
    }
  },
  "op": {
    "accompaningEvents": {
      "add": "Adding {{taskType}} to {{vordType}} {{id}}",
      "edit": "Edit time of {{type}}, {{vordType}} {{id}}",
      "remove": "Removing {{taskType}}, {{type}} {{id}}"
    },
    "addPassenger": "Passenger added to duty {{dutyId}}",
    "applyRevision": "Schedule reverted to last saved",
    "assignVehicles": "Vehicles Assigned",
    "car": {
      "add": "Taxi with relief car added to {{type}} {{id}}"
    },
    "changeDutyStat": "Duty {{ids}} stat \"{{name}}\" changed to \"{{value}}\"",
    "changeVehicleStat": "Vehicle {{ids}} stat \"{{name}}\" changed to \"{{value}}\"",
    "clearDuties": "Duties Cleared",
    "clearReliefVehicles": "Relief Vehicles cleared",
    "comment": "Comment modified on {{type}} {{id}}",
    "compactStack": "Order Stack",
    "completeElements": "Schedule elements revised",
    "createStats": "Stats analyzed",
    "custom": {
      "add": "{{description}} was added to {{type}} {{id}}",
      "edit": "{{description}} was edited in {{type}} {{id}}",
      "remove": "{{description}} was removed from {{type}} {{id}}"
    },
    "dismissIssues": {
      "dismiss": "Move to dismiss issues",
      "undismiss": "Move to open issues"
    },
    "dutiesAssigned": "Duty {{ids}} trips were assigned",
    "dutiesBatchEdit": "Duties edited",
    "dutiesUnassigned": "Duty {{ids}} trips were unassigned",
    "dutyBatchEdit": "Duty edited",
    "editId": "ID of {{type}} changed from {{oldId}} to {{newId}}",
    "fixBroken": "Fix invalid schedule",
    "forceDelete": "Force delete {{event}} on duty {{vordId}}",
    "generateDutyIds": "Generated duty IDs",
    "generateDutyIdsBatch": "Generated {{count}} duty IDs",
    "generateVehicleIds": "Generated vehicle IDs",
    "generateVehicleIdsBatch": "Generated {{count}} vehicle IDs",
    "idle": {
      "add": "Deadhead added to {{type}} {{id}}",
      "edit": "Deadhead edited in {{type}} {{id}}",
      "merge": "Deadheads merged in {{type}} {{id}}",
      "remove": "Deadhead removed from {{type}} {{id}}"
    },
    "importFromDay": "Schedule imported",
    "layover": {
      "add": "Layover added to {{type}} {{id}}"
    },
    "moveDutyToStack": "Duties {{ids}} moved to stack",
    "moveRow": "Row {{from}} moved to {{to}} in {{type}} Gantt",
    "moveVehicleToStack": "Vehicles {{ids}} moved to stack",
    "optimize": "Optimized",
    "other_travel": {
      "add": "Travel was added to {{type}} {{id}}",
      "edit": "Travel edited in {{type}} {{id}}",
      "remove": "Travel was deleted from {{type}} {{id}}"
    },
    "preferences": {
      "main": "Preferences modified",
      "type": {
        "request_parameters": "Request Parameters"
      }
    },
    "public_transportation": {
      "add": "Public transportation was added to {{type}} {{id}}",
      "edit": "Public transportation edited in {{type}} {{id}}",
      "remove": "Public transportation was deleted from {{type}} {{id}}"
    },
    "recharge": {
      "add": "Recharge was added to {{type}} {{id}}",
      "edit": "Recharge edited in {{type}} {{id}}",
      "remove": "Recharge was deleted from {{type}} {{id}}"
    },
    "refuel": {
      "add": "Refuel was added to {{type}} {{id}}",
      "edit": "Refuel edited in {{type}} {{id}}",
      "remove": "Refuel was deleted from {{type}} {{id}}"
    },
    "relief_car": {
      "add": "Relief Car was added to {{type}} {{id}}",
      "edit": "Relief Car edited in {{type}} {{id}}",
      "remove": "Relief Car was deleted from {{type}} {{id}}"
    },
    "save": "Schedule saved",
    "selectedOf": "{{checked}} of {{all}}",
    "serviceTrip": {
      "add": "Trip {{tripId}} was added",
      "delete": "Trip {{tripId}} was deleted",
      "editTime": "{{tripId}} was Edited in {{type}} {{id}}",
      "move": {
        "one": "Trip {{tripId}} moved from {{type}} {{target}} to {{origin}}",
        "other": "Trip {{tripId}} moved from {{type}} {{target}} to {{origin}}",
        "simultaneous": "Trips on {{type}} {{origin}} between trip IDs {{tripId}} moved to {{target}} ([vehicle, duty])",
        "swap": "Swap from {{tripId}} to {{tripId2}} at {{target}} to {{origin}}",
        "swapRight": "Swap right hand from {{tripId}} at {{target}} to {{origin}}",
        "toNew": "Trip {{tripId}} moved from {{type}} {{target}} to a new row",
        "toStack": "Trip {{tripId}} moved from {{type}} {{target}} was unassigned"
      }
    },
    "sync": "Schedule has been synced",
    "taxi": {
      "add": "Taxi added to {{type}} {{id}}",
      "edit": "Taxi edited in {{type}} {{id}}",
      "remove": "Taxi removed from {{type}} {{id}}"
    },
    "terminals": {
      "edit": "Editing terminals of {{type}} {{id}}"
    },
    "uiPreferences": {
      "main": "General settings modified"
    },
    "updateTrips": "Trips Updated",
    "vehiclesAssigned": "Vehicle {{ids}} trips were assigned",
    "vehiclesUnassigned": "Vehicle {{ids}} trips were unassigned",
    "walk": {
      "add": "Walk was added to {{type}} {{id}}",
      "edit": "Walk edited in {{type}} {{id}}",
      "remove": "Walk was deleted from {{type}} {{id}}"
    }
  },
  "optibizeCount": {
    "title": "Running Tasks"
  },
  "paramSync": {
    "checked": "Checked",
    "empty": "Empty",
    "mainPatternBoxChecked": "Note: For main pattern, Box is checked",
    "mainPatternBoxUnChecked": "Note: For main pattern, Box is unchecked",
    "mainPatternEmptyField": "Note: For main pattern, field is empty",
    "mainPatternField": "Note: For main pattern, field is {{value}}",
    "unChecked": "Un Checked"
  },
  "pasteDialog": {
    "error": {
      "cellNumber": "Wrong number of cells",
      "emptyValue": {
        "id": "Stop {{stopIdx}} has an empty id.",
        "name": "Stop {{stopIdx}} has an empty name."
      },
      "errorPastingRouteTitle": "Error pasting route",
      "invalidPattern": "Invalid pattern: there is a pattern with less than two stops",
      "invalidPatternMatch": "The pasted stops do not match the specified pattern ({{givenPatternName}}).",
      "invalidRowsCount": "The format is {{expected}} rows. You pasted a table with {{num}} rows.",
      "isTimePointWrongFormat": "In the isTimePoint rows, use only 1 for a timepoint or 0 or leave the cell empty empty for a bus stop.",
      "negativeTravelTime": "There is a negative travel time ({{time}} in row: {{row}}, column: {{col}}.)",
      "noTable": "Please paste a table",
      "overlappingTimes": "Overlapping running times",
      "stopNotFound": "The pasted stop {{stop}} was not found in the project's stops catalog.",
      "timeNotInRange": "The trip time is out of range.",
      "timeTravelNotSupported": "A stop shows an earlier time than that of a previous stop at row: {{row}}, column: {{col}} ({{value}})",
      "wrongColStops": "Your table doesn't have enough columns. Use {{stopsCount}} columns, with each column a stop in the main route",
      "wrongFormat": "Wrong format for time bands; use \"07:00-08:59” format.",
      "wrongTimeFormat": "Wrong time format: \"{{text}}”; use \"07:39\" format (or leave the cell empty)"
    },
    "format": "Format",
    "format2": "Select the type of data you want to paste",
    "format3": "Choose the type of data you want to paste",
    "liveExample": "Live example",
    "liveExample2": "Make sure that the data you copy matches the order of this example",
    "pasteRouteData": "Paste route data",
    "pasteTimeTableData": "Paste timetable data",
    "rowsChooser": {
      "allStops": "All stops",
      "distance": "Distance",
      "excludePatternName": "(exclude pattern name)",
      "factor": "Factor",
      "id": "ID",
      "includePatternName": "(include pattern name)",
      "isPattern": "All stops",
      "isTimePoint": "Timepoint",
      "isTimePoints": "Time points",
      "name": "Stop name"
    },
    "runningTimesDescr": "Your format: Table, with each row in this format: \"06:00-06:59\", \"25\", \"15\", \"10\", ...",
    "runningTimesSubDescr": "The number of columns should reflect either time points or all stops",
    "services": "Service IDs",
    "successTitle": "Pasted successfully",
    "timetableDescr": "Your format: Table, with each row in this format: \"06:40\", \"06:51\", \"07:02\" ...",
    "timetableSubDescr": "The number of columns should reflect all stops.",
    "title": "Paste your data from Excel using Ctrl+V",
    "tooltip": {
      "allStops": "The number of columns and sequence copy/pasted from Excel must match the main pattern. Paste stops in the relevant columns and leave the irrelevant columns empty.",
      "distance": "The distance (in meters) between the previous stop and the current stop",
      "factor": "A factor in meters is used only to auto-generate running times between the previous stop and the current stop. The factor will be taken into account when interpolating the running times between bus stops. For example, use a positive number of meters if the driving speed between the previous stop and the current stop is less than average. Use a negative number of meters if the driving speed between these stops is faster than average.",
      "id": "The stop ID or stop code. This field is mandatory if the 'Stop name' field is unchecked",
      "isPattern": "The first column is the pattern name. The number of columns and sequence copy/pasted from Excel must match the main pattern. Paste stops in the relevant columns and leave the irrelevant columns empty.",
      "isTimePoint": "Enter '1' for a timepoint while keeping non-timepoints empty",
      "isTimePoints": "The first column is the pattern name. The number of columns and sequence copy/pasted from Excel must match the main pattern. Paste time points only in the relevant columns and leave the irrelevant columns empty.",
      "name": "The name of the stop. This field is mandatory if the 'ID' field is unchecked"
    },
    "tryAgain": "Try again",
    "yourFormat": "Your format: "
  },
  "preferences": {
    "adminDescription": "Customize the {{category}} preferences users will see (Recommended View)",
    "adv": {
      "addPref": "Add Preference",
      "apply": "Apply",
      "back": "Back",
      "battery_types": {
        "instanceName": {
          "plural": "batteries",
          "singular": "battery"
        },
        "preferenceName": "Batteries"
      },
      "charger_profiles": {
        "instanceName": {
          "plural": "charging profiles",
          "singular": "charger profile"
        },
        "preferenceName": "Charging Profiles"
      },
      "charger_types": {
        "instanceName": {
          "plural": "chargers",
          "singular": "charger"
        },
        "preferenceName": "Chargers"
      },
      "charging_locations": {
        "instanceName": {
          "plural": "charging stations",
          "singular": "charging station"
        },
        "preferenceName": "Charging Stations"
      },
      "costs": {
        "add_new_vehicle_type": "Add a new vehicle type",
        "driver_daily_fixed_cost": "Driver daily fixed cost",
        "hourly_wage": "Hourly wage",
        "remove_vehicle_type": "Remove vehicle type",
        "unpaid_minimum_break": "Unpaid min break",
        "vehicle_types": {
          "daily_fixed_cost": {
            "hint": "A fixed cost that is added to each vehicle on a daily basis. It usually includes financing, insurance, and other fixed costs that are not related to the vehicle mileage",
            "title": "Daily fixed cost"
          },
          "distance_unit_cost": {
            "hint": "Cost per {{unit}} for the vehicle. This usually includes fuel and wear-and-tear costs",
            "title": "Distance unit cost"
          },
          "title": "Vehicle type costs",
          "title_default": "Default",
          "vehicle_type": "Vehicle type"
        }
      },
      "deadheadCatalog": {
        "default": "Default",
        "name": "Catalog",
        "openInNewTab": "Open in new tab"
      },
      "driver_break": {
        "preferenceName": "Driver Break"
      },
      "driver_signing": {
        "preferenceName": "Driver Signing"
      },
      "driver_vehicle_preparation": {
        "preferenceName": "Driver Vehicle Preparation"
      },
      "duplicate": "Duplicate Preference",
      "editFilter": "Edit Filters",
      "editFilterButton": "Filter",
      "expert": "Expert ",
      "filters": {
        "caption": "Filters",
        "time": {
          "apply": "Apply:",
          "inRange": "Within Ranges",
          "outRange": "Outside Ranges"
        }
      },
      "group": {
        "add": "Add new group",
        "all": "All groups",
        "countSelected": "{{count}} selected",
        "default": "Default:",
        "excludeFromOptimization": "Exclude from optimization",
        "name": "Name",
        "remove": "Remove this group",
        "tooltips": {
          "excludeFromOptimization": "If you exclude this preference group, it will be ignored during crew optimization"
        }
      },
      "hvs": {
        "ApplyOnDepots": "Apply on depots",
        "Custom": "Custom",
        "CustomLabel": "Custom criterion:",
        "goExpert": "Expert",
        "group": "Group",
        "region": "Region",
        "route": "Catalog number",
        "sign": "Route"
      },
      "list": {
        "absoluteTripDelays": "Absolute Trip Delays",
        "addCensusLayer": "Category",
        "addCensusLayerHover": "Add category",
        "algorithmParameters": "Algorithm Parameters",
        "algorithm_parameters": "Algorithm Parameters",
        "allowExistingScheduleAssignment": "Allow Existing Schedule Assignment",
        "allowPartialTripPieces": "Allow Partial Trip Pieces",
        "attendanceReliefTime": "Relief Timing",
        "batteryTypes": "Batteries",
        "BoardingPairsPreference": "Boarding Pairs",
        "boardingTimeRelaxation": "Boarding Time Relaxation",
        "breaksPreference": "Breaks Preference",
        "chargerProfiles": "Charging Profiles",
        "chargerTypes": "Chargers",
        "chargingLocations": "Charging Stations",
        "condition_based_global_preference": "Global Constraints",
        "continuousAttendance": "Continuous Attendance",
        "costs": "Costs",
        "cost_parameters": "Cost",
        "crewRelaxation": "Crew Relaxation",
        "crewScheduleSimilarity": "Crew Schedule Similarity",
        "custom": "Custom",
        "customCodePreference": "Custom Enrichment",
        "customDutyPreference": "Custom Duty Preference",
        "customStatistic": "Custom Stats",
        "customVehiclePreference": "Custom Vehicle Preference",
        "custom_global_preference": "Global Limitations",
        "days_off": "Days Off",
        "day_types": "Cycle Segment",
        "deadheadCatalog": "Deadhead Catalog",
        "deadheadsFilter": "Deadhead Filter",
        "deadheadsGenerator": "Deadhead Generator",
        "deadheadsLimitation": "Deadhead Limitation",
        "depotAccess": "Depot Access",
        "depots": "Depots",
        "depotsCap": "Depot Setup",
        "depotVehicleAllocation": "Depot Vehicle Allocation",
        "driverBase": "Driver Base",
        "driverBreak": "Driver Break",
        "driverChangeoverVehicle": "Driver Changeover Vehicle",
        "driverDutyWorkTimePreference": "Driver Duty Work Time Preference",
        "drivers": "Drivers",
        "driverSigning": "Driver Signing",
        "driverSplitDutyPreference": "Split Break Definition",
        "driverStandby": "Driver Standby",
        "driverVehiclePreparation": "Driver Vehicle Preparation",
        "driverWalk": "Driver Walk",
        "dutyBreaks": "Duty Breaks",
        "DutyConnectionConstraintPreference": "Duty Connection Constraints",
        "dutyHomogeneity": "Duty Homogeneity",
        "dutyIdGenerator": "Duty ID Generator",
        "dutyRelief": "Duty Layover Relief",
        "dutyTaxi": "Duty Taxi",
        "dutyTerminalStops": "Duty Terminal Stops",
        "dutyTypes": "Duty Types",
        "electricVehicleType": "Electric Vehicle Types",
        "ev": "Electric Vehicles",
        "exportFormats": "Export Formats",
        "fleetSize": "Fleet Size",
        "GlobalConstraint": "Global Constraint",
        "GlobalConstraintsPreference": "Global Constraints",
        "homogeneity": "Homogeneity",
        "hvs": "Trip Connections",
        "id_generator": "ID Generator",
        "longBreakRestriction": "Long Break Restriction",
        "max_start_time": "First Start Time",
        "max_vehicles_at_route_start": "Vehicle Capacity",
        "midDayPark": "Midday Park",
        "min_start_time": "Last Start Time",
        "misc": "Misc",
        "onTimePerformanceParameters": "OTP Parameters",
        "onTimePerformancePreference": "OTP Preference",
        "otp": "On Time",
        "overtime": "Overtime",
        "parameters": "Parameters",
        "pattern": "roster cycle",
        "patterns": "Roster Cycles",
        "pinchPoint": "Control Point",
        "placesGrouping": "Places Grouping",
        "pref": "Preferences",
        "prefGroups": "Preference Groups",
        "prePostTrip": "Pre/Post-Trip",
        "reliefPoint": "Relief Point",
        "reliefPointPreference": "Relief Points",
        "reliefTime": "Relief Timing",
        "report": "Reports",
        "reporting_parameters": "Reports",
        "repositionDutyStartEndTasksForBreaks": "Reposition Duty Start End Tasks For Breaks",
        "rest_time": "Rest Time",
        "roster_groups": "Roster Groups",
        "roster_types": "Roster Types",
        "route": "Route",
        "routeGroups": "Route Groups",
        "route_ids": "Routes",
        "scheduleSimilarity": "Schedule Similarity",
        "service_id": "Service",
        "standby": "Standby Types",
        "stopGroups": "Stop Groups",
        "taxiCatalog": "Taxi Catalog",
        "TaxiPairingPreference": "Taxi Pairing Preference",
        "taxiSchedule": "Taxi Schedule",
        "taxiToBreaks": "Taxi To Breaks",
        "taxiToPiece": "Taxi To Piece",
        "TimeBasedConstraintPreference": "Time-Based Constraints",
        "timeDefinitionsPreference": "Time Definitions",
        "timeLimitations": "Time Limitation",
        "time_definitions": "Time Definitions",
        "time_points_frequencies": "Point Frequencies",
        "travelType": "Duty Travel",
        "travelTypeOther": "Other",
        "travelTypePublic": "Public Transportation",
        "travelTypePublicTransport": "Public Transportation",
        "travelTypeReliefCar": "Relief Car",
        "travelTypeWalk": "Walk",
        "tripFrequency": "Trip Headway",
        "tripsProfitability": "Trip Profitability",
        "tripStartTime": "Trip Start Time",
        "trip_departure_frequency": "Trip Frequency",
        "vChange": "Vehicle Change",
        "vehicleDistance": "Vehicle Distance Limitation",
        "vehicleIdGenerator": "Vehicle ID Generator",
        "vehicleQuantity": "Vehicle Quantity",
        "vehicles": "Vehicles",
        "vehicleStandbyLimitation": "Vehicle Standby Limitation",
        "vehicleStartEndTimeLimitation": "Vehicle Start/End Time Limitation",
        "vehicleTypes": "Vehicle Types",
        "vTypes": "Vehicle Types",
        "weeklyCrewSimilarity": "Weekly Crew Similarity",
        "weeklyVehicleSimilarity": "Weekly Vehicle Similarity",
        "widespread": "Layover",
        "workLmt": "Work Limitation"
      },
      "load": "Load",
      "loadingFilters": {
        "central": "Central Team",
        "mine": "My Preferences",
        "optibus": "Optibus"
      },
      "new": "New",
      "params": {
        "date": {
          "pickADate": "Pick a date"
        },
        "paramNotInUse": "This parameter is not in use",
        "route": {
          "alternative": "Alternative",
          "direction": "Direction",
          "sign": "Route"
        },
        "title": "Template Parameters"
      },
      "preferenceDescription": {
        "breaksPreference": "The rules governing different types of breaks (for example: rest break, meal break). You can use these rules to set different break rules for different labor agreements or groups of drivers",
        "deadheadCatalog": "The deadhead catalogs available for use. Select which one should be used for this schedule.",
        "driverBase": "The stops where drivers can start and end duties and split breaks",
        "dutyTypes": "The types of duties on your schedule (for example: morning, night, full day). Define duty type attributes such as duty length, start and end time, work and paid time, and whether changeovers and splits are allowed.",
        "GlobalConstraintsPreference": "Constraints that apply to the entire schedule. For example, control average paid time, how many duties there are in total, or how many duties there are of a certain type.",
        "hvs": "Whether and how any two trips can follow one another (for example: buses on the same route)",
        "midDayPark": "The conditions under which vehicles can park in the middle of the day",
        "prePostTrip": "How much time to allocate for vehicle preparation and inspection before pull-outs or after pull-ins",
        "reliefPointPreference": "The stops where drivers can relieve other drivers. Specify the associated routes, times of day, and whether relief points are allowed mid-route.",
        "travelType": "The different travel types drivers can use for different purposes (driver base, changeover, break). The travel types include Walk, Relief Car, and Other (ride-hailing and high-frequency public transportation).",
        "travelTypeOther": "Driver travels between relief and duty points via ride-hailing and high-frequency public transportation.",
        "travelTypeReliefCar": "Driver travels between relief and duty points via designated relief car.",
        "travelTypeWalk": "Driver walks between relief and duty points.",
        "vehicleIdGenerator": "The logic that determines how vehicle IDs will be generated",
        "widespread": "How many minutes there should be between trips. Define layovers based on time of day, vehicle type, and attributes like routes and stops"
      },
      "prefGroups": {
        "default": "Default"
      },
      "readMore": "Read more.",
      "reliefPoint": {
        "driveToRelief": "Drive to relief",
        "includeDepots": "Include depots",
        "mid_route": "Mid-route",
        "placementInRoute": "Placement in route",
        "start_end": "Start/end",
        "start_end_mid_route": "Start/end & Mid-route",
        "tooltips": {
          "driveToRelief": "Will a vehicle be driven to the relief point?",
          "includeDepots": "Allow depots to be designated as relief points",
          "placementInRoute": "The point in the route at which relief points are allowed",
          "timesApplied": "The times throughout the day at which relief point applies"
        }
      },
      "reliefTime": {
        "addTime": "Another time",
        "after_arrival_departure": "After arrival & on departure",
        "all_day": "All-day",
        "arrival": "Arrival",
        "arrival_before_departure": "On arrival & before departure",
        "arrival_departure": "Arrival & departure",
        "before_departure": "Before departure",
        "between": "Between",
        "departure": "Departure",
        "except": "Except",
        "minutes": "minutes",
        "placeHolders": {
          "routes": "Select routes",
          "stops": "Select stops"
        },
        "prefGroup": "Pref. groups",
        "reliefTime": "Relief time",
        "routes": "Routes",
        "stops": "Stops",
        "timeRange": "Time range",
        "timesApplied": "Times applied",
        "tooltips": {
          "after_arrival_departure": "The incoming driver gets off the vehicle a set number of minutes after arrival, leaving the vehicle unattended. The outgoing driver gets on the vehicle just before departure. Defined routes and times applied will refer to arrival.",
          "arrival": "The changeover between the two drivers occurs when the vehicle arrives at the stop. The route and time applied refer to the arrival.",
          "arrival_before_departure": "The incoming driver gets off the vehicle on arrival, leaving the vehicle unattended. The outgoing driver gets on the vehicle a set number of minutes before departure. Defined routes and times applied will refer to departure.",
          "arrival_departure": "The incoming driver gets off the vehicle on arrival, leaving the vehicle unattended. The outgoing driver gets on the vehicle just before departure. Defined routes and times applied will refer to arrival and departure.",
          "before": "The changeover between the two drivers occurs a set number of minutes before the vehicle departs the stop. The route and time applied refer to the departure.",
          "departure": "The changeover between the two drivers occurs when the vehicle departs the stop. The route and time applied refer to the departure.",
          "timesApplied": "The times throughout the day at which this relief time applies"
        },
        "xMinutesAfter": "{{minutes}} minutes after arrival",
        "xMinutesBefore": "{{minutes}} minutes before departure"
      },
      "removePrf": "Remove Preference",
      "routeGroups": {
        "add": "Add a new route group",
        "error": {
          "end": " is missing from the dataset",
          "plural": "The following set of route IDs ",
          "single": "The route ID "
        },
        "idError": {
          "empty": "The name can't be empty",
          "illegalChar": "Invalid character: ",
          "uniq": "This name already in use"
        },
        "name": "Name",
        "remove": "Remove this route group",
        "routes": "Routes",
        "showPatterns": "Show all route patterns"
      },
      "selectFromList": "Please select a preference from the list.",
      "stopGroups": {
        "add": "Add a new stop group",
        "error": {
          "end": " is missing from the dataset",
          "plural": "The following set of stop IDs ",
          "single": "The stop ID "
        },
        "name": "Name",
        "remove": "Remove this stop group",
        "stops": "Stops"
      },
      "taxiCatalog": {
        "catalog": "Catalog",
        "custom": "Custom",
        "fallbackToDeadheads": "Use deadhead catalog for missing"
      },
      "terminalStops": {
        "circularity": {
          "circularity": "circularity:",
          "duty_end": "End duty",
          "duty_start": "Start duty",
          "duty_start_duty_end": "Start duty - End duty",
          "duty_start_split_start": "Start duty - Start split",
          "split_end": "End split",
          "split_end_duty_end": "End split - End duty",
          "split_start": "Start split",
          "split_start_split_end": "Start split - End split",
          "title": "Set circularity between stops:"
        },
        "tooltip": {
          "split_duty": "The start and end stops of a straight duty",
          "straight_duty": "The start and end stops of a split duty ",
          "straight_split_duty": "The start and end stops of the duty, regardless of whether it is a straight or split duty; if it is a straight duty, the split parameters will be disregarded"
        },
        "typeName": {
          "split_duty": "Split",
          "straight_duty": "Straight",
          "straight_split_duty": "Straight or Split"
        }
      },
      "timeTable": {
        "maxFreq": "Maximum Frequency",
        "minFreq": "Minimum Frequency",
        "minTrips": "Minimum Trips",
        "route": "Route"
      },
      "tooltip": {
        "absoluteTripDelays": "Maximum allowed and preferred overlap time between two adjacent trips",
        "algorithmParameters": "Defining and controlling basic algorithm parameters, such as max run time, solution optimal convergence",
        "algorithm_parameters": "Defining and controlling basic algorithm parameters, such as max run time, solution optimal convergence",
        "algorithm_parameters_timetable": "Define and control basic algorithm parameters, such as max run time or number of iterations",
        "allowExistingScheduleAssignment": "Maintain existing connections between adjacent  trips",
        "attendanceReliefTime": "Define timing preferences for driver changeovers",
        "batteryTypes": "The batteries that power your electric vehicles, along with properties like capacity and state of charge. The batteries defined here will determine which batteries can be used in other EV preferences. TIP: Be sure to define all the EV preferences!",
        "BoardingPairsPreference": "Define smart replacement of taxis with pulls",
        "boardingTimeRelaxation": "Enable overriding boarding time (i.e., additional time before a trip for boarding passengers).",
        "breaksPreference": "Define rules for breaks regulation, using the duty breaks",
        "chargerProfiles": "The charging profiles (for example: fast and slow) that are supported by the EV chargers defined in the Chargers preference. Set properties like the charging rate and batteries supported by each profile. TIP: Be sure to define all the EV preferences!",
        "chargerTypes": "The chargers available to charge your electric vehicles (for example: Wave 250, E2 plug-in). Each charger can be associated with multiple charging profiles (defined in the Charging Profiles preference). TIP: Be sure to define all the EV preferences!",
        "chargingLocations": "The locations (depots or stops) where your electric vehicles can be charged, along with the associated charger and capacity. TIP: Be sure to define all the EV preferences!",
        "condition_based_global_preference": "Limit the number of rosters",
        "continuousAttendance": "Maximum time a vehicle can be left unattended and where",
        "costs": "Vehicle and driver costs",
        "cost_parameters": "Define cost per hour",
        "crewRelaxation": "Select constraints that can be relaxed if a schedule can't be created",
        "crewScheduleSimilarity": "Prefer to create a similar run-cut to an existing one",
        "custom": "Customized and tailored preferences",
        "customCodePreference": "Enrich the schedule using custom code",
        "customDutyPreference": "Unique/custom preferences and constraints not covered in the other categories. Used for fast implementation of client customizations",
        "customStatistic": "Add your own stats and view them directly on the schedule",
        "customVehiclePreference": "Unique/custom preferences and constraints not covered in the other categories. Used for fast implementation of client customizations",
        "custom_global_preference": "Define custom limitations for the entire roster schedule",
        "days_off": "Define the rules for days off (e.g., minimum, maximum and consecutive days off)",
        "deadheadCatalog": "Deadhead trips' duration and distance between all terminal stops, categorized by days and time of days",
        "deadheadsFilter": "Override/change deadheads and pull-in/pull-out trips under certain conditions",
        "deadheadsGenerator": "Calculate and complete deadheads which are missing from the deadhead catalog",
        "deadheadsLimitation": "Distance and time limits on deadheads and depot pull-in/pull-out trips",
        "depotAccess": "Define minimal depot access time and distance for pull-in/pull-out",
        "depotsCap": "Setup depots and define their capacity",
        "depotVehicleAllocation": "Define depot optimization algorithm and rules for vehicle allocation to depots",
        "deprecationMessages": {
          "error": "You are using both a phased out preference and its replacement \"{{replacingPref}}\", which can't be used simultaneously. Select one of them or contact support.",
          "info": "This preference is being phased out and has been replaced with \"{{replacingPref}}\". It is no longer supported and may be removed from future versions.",
          "notSupported": "This preference is no longer functional. All information in this preference must be deleted.",
          "notSupportedDeprecated": "This preference has been replaced with \"{{replacingPref}}\" and is no longer usable. Delete this preference and begin using \"{{replacingPref}}\" instead.",
          "travelWarning": "We have enhanced our duty travel capabilities. As part of this change, this preference is being replaced with {{replacingPref}}. Adjust preferences accordingly or contact support@optibus.com for assistance.",
          "warning": "This preference is being phased out and has been replaced with \"{{replacingPref}}\". It is no longer supported and may be removed from future versions. Adjust preferences accordingly or contact support."
        },
        "driverBase": "Define where a driver is allowed start or end a duty",
        "driverBreak": "Define required breaks for drivers at specific times of day",
        "driverChangeoverVehicle": "Driver changeover between different vehicle blocks options and preferences",
        "driverDutyWorkTimePreference": "Ranking work times with penalties",
        "driverSigning": "Define sign-on and sign-off time for duties",
        "driverSplitDutyPreference": "Driver split break definition, options and preferences",
        "driverStandby": "Penalize breaks above a defined threshold for drivers to help balance breaks between drivers",
        "driverVehiclePreparation": "Defining driver vehicle preparation time at the beginning of a duty",
        "driverWalk": "Define maximum walking distance for drivers to move for a changeover between different vehicles blocks",
        "dutyBreaks": "Define unique break types to be used in regulations",
        "DutyConnectionConstraintPreference": "Define connections between multiple duties to enable duty tasks or events (such as relief trips, refueling, pull trips) to be allocated to any duty",
        "dutyHomogeneity": "Define if drivers should perform homogenized duties, by route or any other characteristic",
        "dutyIdGenerator": "Automatic duty ID generator based on custom logic",
        "dutyRelief": "Define if driver changeover will be at the start/end of layover",
        "dutyTaxi": "Used in a situation where duties should be relieved in specific locations, and travel to a different location to end their duty",
        "dutyTerminalStops": "Define where a driver is allowed to start/end a duty and how (e.g., relief vehicle, public transportation, walk, etc.)",
        "dutyTypes": "Categorizing duties to types, defining parameters for preferred/non-preferred duties",
        "electricVehicleType": "The electric vehicle types in your fleet, along with the batteries that power them. TIP: Be sure to define all the EV preferences!",
        "exportFormats": "Report configuration for clients",
        "fleetSize": "Aim the optimization to a certain total vehicle count (and per type)",
        "GlobalConstraintsPreference": "Introduce global requirements for the run cut, such as max/min number of duties, control the amount of each duty type, etc.",
        "homogeneity": "Define the similarity between roster duties (e.g., similar start time, same duty type, same duty or same duty type each day, etc.)",
        "hvs": "Trips linking preferences and constraints",
        "id_generator": "Define custom logic for generating the roster ID",
        "longBreakRestriction": "Restrict long breaks by defining the maximum time that drivers can be in between trips (not driving or on a split shift, and not involved in other events such as sign-on/off, pull-in/out, taxi or deadhead)",
        "max_start_time": "Define the first trip's maximum allowed departure time",
        "max_vehicles_at_route_start": "Restrict number of vehicles waiting at route start points",
        "midDayPark": "Time and distance conditions for parking in a midday depot",
        "min_start_time": "Define the last trip's minimum allowed departure time",
        "onTimePerformanceParameters": "Set the OTP parameters for missing a timepoint and a service",
        "onTimePerformancePreference": "Set the On-Time Performance targets, as part of the optimization",
        "overtime": "Define overtime and overtime pay ratio",
        "patterns": "Roster cycles create a structure for a rotating roster by defining which types of shifts (such as Early, Late) make up each segment of the cycle.",
        "placesGrouping": "Group nearby stops and treat them as one stop",
        "prefGroups": "Ability to define two sets of preferences and optimize between them. Commonly used for multiple union agreements under the same block schedule",
        "prePostTrip": "Time allocated to vehicle preparation before the vehicle pulls out of the depot and after it pulls in.",
        "reliefPointPreference": "Define stops that are allowed/preferred for use as driver changeover points",
        "report": "Define report templates",
        "reporting_parameters": "Define custom reports (e.g., integration reports and custom formats)",
        "repositionDutyStartEndTasksForBreaks": "Reposition pull-in/pull-out to uphold the driver break limitations",
        "rest_time": "Define the minimum amount of rest time between duties on consecutive days",
        "roster_groups": "Define the settings for different roster groups, including which duties should be used and whether drivers rotate through rosters.",
        "roster_types": "Categorize rosters and define rules for each type",
        "routeGroups": "Defining groups of routes to be used in other preferences and filters",
        "route_ids": "Define which routes you wish to optimize",
        "scheduleSimilarity": "Prefer similar trips connections as an existing schedule",
        "service_id": "Define the service ID you wish to optimize",
        "standby": "Define roster standby types including time ranges and paid time",
        "stopGroups": "Define groups of stops to be used in various preferences and filters",
        "taxiCatalog": "Relief trips' duration and distance between all terminal stops, categorized by days and time of days",
        "TaxiPairingPreference": "Defining the taxi pairing parameters",
        "taxiSchedule": "Define relief vehicle schedule options, such as relief strategy, number of passengers on relief vehicle, etc.",
        "taxiToBreaks": "Use relief transport in specific break types.",
        "taxiToPiece": "Use relief transport for driver changeover between different vehicle blocks",
        "TimeBasedConstraintPreference": "Introduce a global time-based limitation for the run cut, such as max number of meal breaks taking place at the same time in a specific location.",
        "timeDefinitionsPreference": "Defining periods of times to be used in the optimization",
        "timeLimitations": "Regulatory/union constraints for work time",
        "timeplanViewDisabled": {
          "differentRoute": "Trips can only be viewed together in the Timeplan if they are part of the same route or route group",
          "tripCreatedInSchedule": "Trips can be viewed in the timeplan only if they were created in the timeplan"
        },
        "time_definitions": "Define custom time definitions",
        "time_points_frequencies": "Define required frequencies for timepoints mid-route",
        "travelType": "The different travel types drivers can use for different purposes (driver base, changeover, break). The travel types include Walk, Relief Car, and Other (ride-hailing and high-frequency public transportation).",
        "travelTypeOther": "Driver travels between relief and duty points via ride-hailing and high-frequency public transportation",
        "travelTypeReliefCar": "Driver travels between relief and duty points via designated relief car",
        "travelTypeWalk": "Driver walks between relief and duty points",
        "tripsProfitability": "Decide whether trips should be operated based on their profitability",
        "trip_departure_frequency": "Define the frequency of trips in different time intervals throughout the day",
        "vehicleDistance": "Limit vehicle blocks distance between returns to a depot for refueling or recharging",
        "vehicleIdGenerator": "Automatic vehicle ID generator based on custom logic",
        "vehicleQuantity": "How many vehicles can be associated with the schedule or with specific vehicle types",
        "vehicleStandbyLimitation": "Time limitation between two vehicle blocks",
        "vehicleStartEndTimeLimitation": "Limitation on the vehicle start/end time",
        "vehicleTypes": "Vehicle types and their type assignment hierarchy",
        "weeklyCrewSimilarity": "Consistency of daily driver schedules for a multi-day schedule",
        "weeklyVehicleSimilarity": "Consistency of daily vehicle schedules for a multi-day schedule",
        "widespread": "Time gap (layover) between trips",
        "workLmt": "Regulatory/union constraints for work time and break rules"
      },
      "vehicleTypes": {
        "add": "Add new group",
        "group": "Group {{index}}",
        "remove": "Remove this group",
        "select": "Select vehicle type"
      },
      "widespread": {
        "Break": "Break",
        "Time": "Time"
      },
      "workLimit": {
        "Accumulation": "Accumulation",
        "attendance": "Continuous Attendance",
        "boarding": "Boarding Time",
        "breakLength": "Break Length",
        "breaks": "Breaks",
        "breakStart": "Break Start Time Between",
        "breakTo": "To",
        "Changeover": "Changeover",
        "longBreaks": "Long Breaks",
        "minBreak": "Min. Break",
        "minContBreak": "Min. Continuous Break",
        "minDuty": "Min. Duty Length",
        "overlooks": "Overlooks",
        "prepost": "Pre/Post Trips",
        "reqBreak": "Required Break",
        "reqEvery": "Required Every",
        "signing": "Signing",
        "strechTimeMax": "Max. Stretch Time",
        "taxi": "Taxi",
        "workTime": "Working Time",
        "workTimeMax": "Max. Work Time"
      },
      "youCanAdd": "Nothing configured yet. You can add a preference below.",
      "youCanAddDynamic": "Nothing configured yet. You can add a {{prefName}} below."
    },
    "allPurposes": "All purposes",
    "allRoutes": "All routes",
    "allStops": "All stops",
    "clearAll": "Clear errors",
    "depots": {
      "add": "Add Depot",
      "branch": "Branch ID",
      "capabilities": {
        "endDay": "End of day",
        "midDay": "Mid-day"
      },
      "capacity": {
        "byVehicles": "Per vehicle type:",
        "global": "Total vehicles",
        "title": "Capacity"
      },
      "minimumTimeAtDepot": "Minimum time at depot",
      "remove": "Remove Depot",
      "stop": "Stop"
    },
    "deprecationMessages": {
      "error": "You are using both a phased out preference and its replacement {{replacingPref}}, which can't be used simultaneously. Select one of them or contact support.",
      "errorWithoutDeprecation": "You are using both {{replacedPref}} and its replacement {{replacingPref}}, which cannot be used simultaneously. Adjust preferences accordingly or contact support@optibus.com for assistance.",
      "info": "This preference is being phased out and has been replaced with {{replacingPref}}. It is no longer supported and may be removed from future versions.",
      "notSupported": "This preference has been replaced with \"{{replacingPref}}\" and is no longer usable. Delete this preference and begin using {{replacingPref}} instead.",
      "travelWarning": "We have enhanced our duty travel capabilities. As part of this change, this preference is being replaced with {{replacingPref}}. Adjust preferences accordingly or contact support@optibus.com for assistance.",
      "warning": "This preference is being phased out and has been replaced with {{replacingPref}}. It is no longer supported and may be removed from future versions. Adjust preferences accordingly or contact support."
    },
    "discardDialog": {
      "message": "You have unsaved changes that will be lost if you close the preferences now.",
      "title": "Close preferences?"
    },
    "duplicate": {
      "suffix": "copy"
    },
    "dutyTypes": {
      "one": "Penalty for other: ",
      "other": "Penalty for other: ",
      "add": "Add type",
      "allowPenalty": "Allowed",
      "customTimes": "Custom time definition",
      "default": "Default",
      "fields": {
        "changeover": "Changeover",
        "description": "Description",
        "duration": "Duration",
        "end": "End",
        "firstRunLength": "First run length",
        "length": "Length",
        "name": "Name",
        "paid": "Paid",
        "penalty": "Penalty",
        "split": "Split",
        "start": "Start",
        "work": "Work"
      },
      "remove": "Remove type",
      "splitTypes": {
        "any": "Either",
        "no": "No",
        "yes": "Yes"
      }
    },
    "edit": {
      "placeholderDescription": "Short Description (optional)",
      "placeholderName": "Preferences Name",
      "title": "Edit Preferences"
    },
    "filter": {
      "addTimeRng": "Add time range",
      "apply_time": "Apply preference to the following time ranges:",
      "depot_pulls": "Depot pulls",
      "dutyTypes": "Duty Types",
      "expert": "Expert",
      "preferences": "Preferences",
      "service_trips": "Service trips",
      "stretches": "Stretches",
      "timeIntervals": "Time Intervals",
      "vclTypesInner": "Apply to vehicle types:",
      "vcl_types": "Vehicle Types"
    },
    "flexibility": "Flexibility",
    "header": "Preferences",
    "headerLeft": "Preferences",
    "homogenicVehicleSchedule": {
      "criterion": "Criterion:"
    },
    "instance": {
      "edit": {
        "placeholderDescription": "Short Description (optional)",
        "placeholderName": "Preference Name",
        "title": "Save As"
      },
      "editName": {
        "button": "Edit the preference name",
        "placeholder": "Enter name"
      },
      "load": {
        "button": "Load Template",
        "noItems": "No templates to display...",
        "title": "Load Template"
      },
      "remove": {
        "text": "Are you sure you want to delete template \"{{name}}\"?",
        "title2": "Delete a template"
      },
      "saveAs": {
        "overrideConfirmMessage": "Preference template \"{{name}}\" already exists. Are you sure you want to override it?",
        "overrideConfirmTitle": "Override an existing preference template",
        "placeholderDescription": "Short Description (optional)",
        "placeholderName": "Preference Template Name",
        "title": "Save As Preference Template"
      },
      "saveAsTemplate": "Save As Template"
    },
    "list": {
      "all": "All",
      "inUse": "In use",
      "noData": "No preferences in use"
    },
    "load": {
      "button": "Load Preferences",
      "error": "Error loading preferences",
      "loaded": "Preference {{name}} was loaded successfully",
      "noItems": "No preferences to display...",
      "remove": {
        "errorMessage": "Preference could not be deleted",
        "text": "Are you sure you want to delete preferences \"{{name}}\"?",
        "title2": "Delete preferences"
      },
      "rosterGroupErrors": {
        "general": "The preferences contain invalid roster group settings for allowed duties",
        "nameExists": "Invalid roster group preference: unable to import group called \"{{name}}\" as it already exists"
      },
      "title": "Load Preferences"
    },
    "misc": {
      "addStops": "Add stops",
      "destination": "Destination",
      "origin": "Origin",
      "removeField": "Remove field"
    },
    "noPreferences": "No preferences to show",
    "onTime": {
      "fields": {
        "minimumOtp": "Target OTP:",
        "penalty": "Maximum spend (per trip) to increase OTP:",
        "targetOtp": "OTP upper threshold:"
      },
      "tooltips": {
        "minimumOtp": "Set the desired overall OTP for the schedule",
        "penalty": "The maximum amount to be paid, per trip, in order to increase OTP above the target OTP (up to 100% or the threshold defined below)",
        "targetOtp": "Only increase a trip's OTP until this level (even if the max spend allows it)"
      }
    },
    "onTimeParameters": {
      "costTypes": {
        "noCost": "No Cost",
        "oneTimeCost": "One-time cost per trip"
      },
      "fields": {
        "departureTimeRange": "Departure time range:",
        "forOtp": "for OTP",
        "lower": "lower",
        "maxAllowedDelay": "Max allowed delay (beginning of trips):",
        "missingService": "Missing Service:",
        "missingTimepoint": "Missing Timepoint:",
        "OtpPenaltyCost": "Penalty cost",
        "PenaltyDiscount": "Penalty discount",
        "upper": "upper"
      },
      "tooltips": {
        "departureTimeRange": "The allowed departure time range of a timepoint ",
        "maxAllowedDelay": "The maximum allowed delay (at the beginning of a trip) that does not account for a missing service",
        "OtpPenaltyCost": "The penalty cost for missing a service",
        "PenaltyDiscount": "Penalty discount for high OTP value"
      }
    },
    "penalty": "Penalty",
    "remove": {
      "text": "Are you sure you want to delete this set of preferences: \"{{name}}\"?",
      "title2": "Delete preferences"
    },
    "removeAll": {
      "text": "Are you sure you want to delete this preference \"{{prefName}}\"? It will be removed permanently from the preferences.",
      "title": "delete all {{prefName}}"
    },
    "requestParameters": {
      "algIterations": "Algorithm iterations",
      "allowDutyModification": "Allow duty modification",
      "allowDutyModificationText": "Allow duty modifications due to manual vehicle changes",
      "allowUnscheduleDuties": "Allow unscheduled duties",
      "allowUnscheduleDutiesText": "Allow optimization to move duties that can't be scheduled into the stack",
      "allowVehicleModification": "Allow vehicle modification",
      "allowVehicleModificationText": "Allow vehicle modifications due to manual duty changes",
      "assignVehicleQuickMode": "Assign vehicles quick mode",
      "crewAlgorithmName": {
        "descriptions": {
          "advancedVehicleAdapter": "Create duties and adjust vehicles to duties",
          "fixedVehicles": "Quickly creates duties without any vehicles changes",
          "optimal": "Creates duties without any vehicles changes",
          "vehicleAdapter": "Quickly create duties and adjust vehicles to duties"
        },
        "options": {
          "advancedVehicleAdapter": "Advanced Vehicle adapter",
          "fixedVehicles": "Fixed blocks",
          "optimal": "Advanced Fixed blocks",
          "vehicleAdapter": "Vehicle adapter"
        },
        "title": "Crew Algorithm"
      },
      "dutyRecutIterations": "Duty recut iterations",
      "illegalDutyPenalty": "Illegal duty penalty",
      "interactiveParameters": "Interactive Parameters",
      "limitVehicleAddition": "Limit vehicle addition",
      "maxDutyPenalty": "Max duty penalty",
      "maxVehicleAddition": "Max vehicle addition",
      "relaxedConstraints": {
        "explain": "Select constraints that can be relaxed if a schedule can't be created, the order in the list determine the order of relaxation until a solution is met",
        "placeholder": "relaxations",
        "title": "Relaxed constraints"
      },
      "scheduleParameters": "Schedule Parameters",
      "startFromExistingDuties": "Start from existing duties",
      "vehicleAdapterParametersTitle": "vehicle adaptation for duties"
    },
    "resolveAll": "Resolve errors",
    "rosterTypes": {
      "add": "Add Roster Type",
      "fields": {
        "day_off_count": "Number of days off",
        "guarantee_time": "Guarantee time",
        "paid_time": "Paid time",
        "work_day_count": "Number of workdays",
        "work_day_indices": "Workdays"
      },
      "remove": "Remove",
      "tooltip": {
        "day_off_count": "The range of the allowed number of days off for a roster (e.g., 2 to 3 indicates that a roster has at least 2 days off and at most 3 days off)",
        "guarantee_time": "The paid time (in hours and minutes) that is guaranteed for a roster even if it is not met (e.g., a guarantee time of 38:00 means drivers will be paid for 38 hours, even if the roster only has 36 hours)",
        "paid_time": "Range of allowed paid time for this roster (e.g., 36:00-40:00 represents a roster that has at least 36 hours and at most 40 hours)",
        "work_day_count": "The range of the allowed number of workdays range for a roster (e.g., 4 to 5 indicates that a roster has at least 4 workdays and at most 5 workdays)",
        "work_day_indices": "The days on which a roster is allowed to include duties (e.g., exclude Saturday and Sunday if a roster can't include duties on weekends)"
      }
    },
    "roster_groups": {
      "allowedDuties": {
        "allDuties": "All duties",
        "allDutyTypes": "All duty types",
        "allRoutes": "All routes",
        "anotherFilter": "Add filters",
        "depots": "Depots",
        "dutyDepots": "Duty Depots",
        "dutyIds": "Duty IDs",
        "dutyTypes": "Duty types",
        "ends": "End with",
        "list": "List",
        "prefGroups": "Preference groups",
        "range": "Range",
        "removeFilter": "Remove filter",
        "routes": "Routes",
        "select": {
          "depots": "Select depots",
          "dutyDepots": "Select duty depots",
          "dutyIds": "Select duty IDs",
          "dutyTypes": "Select duty types",
          "prefGroups": "Select preference groups",
          "routes": "Select routes"
        },
        "selectedDuties": "Selected duties",
        "selectFilter": "Select filter",
        "starts": "Start with",
        "title": "Duties",
        "tooltip": "Determine which duties should be used in this group"
      },
      "deleteMessage": "Are you sure you want to delete group \"{{group}}\"? It will be removed from the schedule and preferences.",
      "deleteTitle": "Delete Group",
      "depot": "Depot",
      "duty_id": "Duty ID",
      "duty_type": "Duty Type",
      "general": {
        "groupName": "Group name",
        "noOfRosters": "Number of rosters",
        "numRosters": "# Rosters",
        "title": "General",
        "tooltip": "Define general settings for this group, including its name and the number of rosters included"
      },
      "new": "New Group",
      "pref_group": "Pref. Group",
      "rotation": {
        "header": "Rotating",
        "title": "Rotation",
        "tooltip": "Define whether drivers rotate through rosters"
      },
      "route": "Route"
    },
    "roster_patterns": {
      "add": "Cycle Segment",
      "disableGroupSelectionTooltip": "The roster cycle can’t be applied to another group when manual changes have been made to the duty IDs in any of the cycle segments. To apply this roster cycle to another roster group, reset the duty IDs in all cycle segments.",
      "duties": {
        "disableDutyCriteriaTooltip": "Duty criteria can’t be changed when the duty IDs have been manually selected. To enable duty criteria and override manual changes, reset the duty IDs.",
        "dutyIds": {
          "all": "All duty IDs",
          "select": "Select duty IDs",
          "title": "Duty IDs"
        },
        "dutyTypes": {
          "all": "All duty types",
          "title": "Duty types"
        },
        "filterTitles": {
          "dutyTypes": "Duty types",
          "endsWith": "Duty ID ends with",
          "endTime": "Duty end time",
          "idList": "Duty ID list",
          "idRange": "Duty ID range",
          "paidTime": "Paid time",
          "prefGroup": "Preference group",
          "startsWith": "Duty ID starts with",
          "startTime": "Duty start time"
        },
        "preferenceGroups": {
          "all": "All preference groups",
          "title": "Preference Groups"
        },
        "removeMissingDuties": "Remove missing duties",
        "reset": "Reset selection based on criteria selected below. This will override any manual changes.",
        "title": "Duty filters",
        "tooltip": "The duties that can be used in this cycle segment"
      },
      "edit_type": {
        "full_roster": "After each roster row",
        "full_roster_display": "roster row",
        "minDescription": "Minimum number of consecutive days off before cycle segments switch",
        "minimum": "Minimum",
        "none": "Custom cycle",
        "none_display": "custom",
        "on_day_off": "After consecutive days off",
        "on_day_off_display": "days off",
        "switchAfter": "switch after:",
        "switchSegments": "Switch cycle segments:",
        "title": "Define when cycle segments switch in this roster cycle"
      },
      "emptyState": "Add a cycle segment to this roster cycle.",
      "general": {
        "code": {
          "title": "Code",
          "tooltip": "Cycle segment abbreviation that will appear on the roster"
        },
        "manualOnly": {
          "title": "Manual only",
          "tooltip": "When this is turned on, this cycle segment will be excluded from the automatic generation of a roster cycle. You will be able to add this segment manually to the roster cycle."
        },
        "name": "Name",
        "namePlaceholder": "Enter segment name",
        "standbyType": {
          "title": "Standby type",
          "tooltip": "Standby type that will be used for this cycle segment. If you want to allow any standby type, select ‘Any‘"
        },
        "title": "General",
        "upTo4": "Up to 4 characters"
      },
      "remove": "Remove cycle segment",
      "removeDayTypeMessage": "Removing this cycle segment will also remove any instances of it within the rosters. Please confirm the removal.",
      "removePatternMessage": "Removing this roster cycle will also remove any instances of it and it's cycle segments within the rosters. Please confirm the removal."
    },
    "saveAs": {
      "descriptionTitle": "Description",
      "nameTitle": "Name",
      "overrideConfirmMessage": "Preference \"{{name}}\" already exists. Are you sure you want to override it?",
      "overrideConfirmTitle": "Override an existing preference",
      "placeholderDescription": "Short Description (optional)",
      "placeholderName": "Preferences Name",
      "saveToTitle": "Save to",
      "title": "Save As Preferences"
    },
    "saveHint": "Set Preferences",
    "selectCatalog": "Select a catalog",
    "selectRoutes": "Select routes",
    "setPriority": "Drag and drop to set order of priority",
    "standbyTypes": {
      "add": "Add standby type",
      "fields": {
        "description": "Description",
        "first": "1st Part",
        "minThreshold": "Daily Minimum Standby",
        "name": "Name",
        "paid": "Fixed Paid Time",
        "second": "2nd Part",
        "timeRange": "Time Range"
      },
      "name": "Standby type",
      "paidTimeTooltip": "By default paid time will be calculated according to the standby working time. To overwrite this please set a fixed paid time.",
      "remove": "Remove standby type",
      "timeRangeTypes": {
        "no": "No",
        "split": "Split",
        "yes": "Yes"
      }
    },
    "tabs": {
      "advanced": "Preferences",
      "expert": "Expert",
      "requestParameters": "Request Parameters"
    },
    "threshold": {
      "greaterThan": "Greater than",
      "lessThan": "Less than",
      "percentage": "Percentage"
    },
    "travel": {
      "other": "Other",
      "addCriteria": "Add Criteria",
      "allBreak": "All break types",
      "breakTypes": "Break types",
      "car": "Relief car",
      "customExpression": "Custom expression",
      "description": "Description",
      "hints": {
        "other_travel": {
          "catalog": "Select a catalog",
          "customExpression": "Customized criteria for this type of duty travel allowances. Supported input parameters are: {{supportedCustomInput}}",
          "name": "This name will be used as the event type in the schedule",
          "penalty": "Assign a penalty to apply to set conditions. Select a higher penalty to avoid this type of duty travel events as much as possible.",
          "routes": "Select the routes for which this type of duty travel events are allowed",
          "stops": "Select the stops for which this type of duty travel events are allowed",
          "timesRange": "The times throughout the day at which this type of duty travel apply"
        },
        "public_transport": {
          "catalog": "Select a public transportation catalog or the option to use the current schedule",
          "customExpression": "Customized criteria for defining when public transportation can be used. Supported input parameters are: {{supportedCustomInput}}",
          "penalty": "Assign a penalty to apply to set conditions. Select a higher penalty to avoid public transportation events as much as possible.",
          "routes": "Select the routes for which public transportation is allowed",
          "stops": "Select the stops for which public transportation is allowed",
          "timesRange": "The times throughout the day at which public transportation applies"
        },
        "relief_car": {
          "catalog": "Select a relief car catalog from existing catalogs",
          "customExpression": "Customized criteria for relief car allowances. Supported input parameters are: {{supportedCustomInput}}",
          "name": "This name will be used as a prefix for relief car IDs",
          "penalty": "Assign a penalty to apply to set conditions. Select a higher penalty to avoid relief car events as much as possible.",
          "routes": "Select the routes for which relief car events are allowed",
          "stops": "Select the stops for which relief car events are allowed",
          "timesRange": "The times throughout the day at which relief car events apply"
        },
        "walk": {
          "catalog": "Select a walk catalog from existing catalogs",
          "customExpression": "Customized criteria for walk allowances. Supported input parameters are: {{supportedCustomInput}}",
          "penalty": "Assign a penalty to apply to set conditions. Select a higher penalty to avoid walk events as much as possible.",
          "routes": "Select the routes for which walk events are allowed",
          "stops": "Select the stops for which walk events are allowed",
          "timesRange": "The times throughout the day at which walk events apply"
        }
      },
      "otherAdder": "Duty travel type",
      "publicTransport": {
        "buffers": {
          "addTimeRange": "Time range",
          "defaultRow": "Default (All day)",
          "maxWaitTime": "Maximum wait time",
          "maxWaitTimeHint": "Define the maximum time a driver can wait to travel as a passenger using public transportation",
          "minTimeAfter": "Minimum time after",
          "minTimeAfterHint": "Define the minimum time a driver should wait after using public transportation and before starting the next duty piece",
          "minTimeBefore": "Minimum time before",
          "minTimeBeforeHint": "Define the minimum time a driver should wait to travel as a passenger using public transportation",
          "title": "Buffer times"
        },
        "connections": {
          "maxTransfersName": "Maximum transfers",
          "maxTransfersNameHint": "Define the maximum number of transfers allowed between public transportation trips",
          "noCombinationsAvailable": "No possible combinations are available. Define Walk or Other preference to use this option.",
          "possibleCombinations": "Possible combinations",
          "possibleCombinationsHint": "Select which travel types can be combined with public transportation",
          "title": "Connections"
        },
        "externalCatalog": "External service (Coming soon)",
        "instanceName": "Public Transportation",
        "scheduleCatalog": {
          "customExpressionHint": "Customized criteria for defining which trips drivers can use as passengers. The supported input parameter is an array of events representing the travel opportunity (for example: deadhead/trip/sequence of sub-trips)",
          "deadheads": "Deadheads",
          "emptyCatalogError": "Select a catalog or use the current schedule",
          "invalidTimeplan": "The selected timeplan includes error violations",
          "missingTimeplan": "The selected timeplan does not exist",
          "pulls": "Pulls",
          "serviceTrips": "Service Trips",
          "tripRoutes": "Route trips",
          "tripRoutesHint": "Select the routes whose trips can be used for public transportation",
          "tripTypeMissing": "At least one trip type must be selected"
        },
        "useCurrentSchedule": "Use current schedule"
      },
      "publicTransportAdder": "Public Transportation",
      "purpose": "Purpose",
      "purposeTypes": {
        "breaks": "Breaks",
        "changeover": "Changeover",
        "driver-base": "Driver base",
        "split": "Split"
      },
      "reliefCar": {
        "addUnattendedTime": "Add unattended time",
        "drivenByRelievedDriver": "Specify if the relief car must be driven by a relieved driver instead of a designated driver",
        "maxReliefCars": "Maximum relief cars",
        "maxReliefCarsHint": "The maximum available relief cars",
        "maxUnattendedTime": "Maximum unattended time",
        "maxUnattendedTimeHint": "The maximum time a relief car can be left unattended at any relief points (outside the depot)",
        "maxUnattendedTimePerStop": "Maximum unattended time per stop",
        "maxUnattendedTimePerStopHint": "The maximum time a relief car can be left unattended at specific relief points (outside the depot)",
        "preferenceLevel": "Round trip preference",
        "preferenceLevelHint": "Specify the preference level for using round trips for relief cars. Select “Strongly preferred” to avoid deadheads as much as possible",
        "preferred": "Preferred",
        "reliefDriverHeader": "Driven by relieved driver",
        "schedule": {
          "dailyFixedCost": "Daily fixed cost",
          "dailyFixedCostHint": "A fixed cost that is added to each relief car on a daily basis. It usually includes financing, insurance, and other fixed costs that are not related to the car mileage",
          "distanceUnitCost": "Distance unit cost",
          "distanceUnitCostHint": "Cost per {{unit}} for a relief car. This usually includes fuel and wear-and-tear costs",
          "maxPassengers": "Maximum passengers",
          "maxPassengersHint": "The maximum number of drivers that can travel as passengers in one relief car. This number includes the car’s driver",
          "maxWaitTime": "Maximum wait time",
          "maxWaitTimeHint": "The maximum time a driver can wait in order to be grouped with other drivers to travel as passengers in a relief car",
          "pairGroupingStrategy": "Round trip grouping",
          "pairGroupingStrategyHint": "Select “yes” to ensure round trips are operated by the same relief car",
          "title": "Relief Car Schedule"
        },
        "selectUnattendedTime": "Select unattended time",
        "stronglyPreferred": "Strongly preferred"
      },
      "routes": "Routes",
      "selectCriteria": "Select Criteria",
      "stops": "Stops",
      "timesAllowed": "Time range",
      "walk": "Walk"
    },
    "type": "Type",
    "uncategorized": {
      "value": "Value"
    },
    "validated": {
      "hiddenErrorsHint": "There are {{count}} errors related to preferences that are currently not in view",
      "hiddenWarningsHint": "There are {{count}} warnings related to preferences that are currently not in view",
      "no": "Errors found",
      "noSingular": "Error found",
      "warnings": "Warnings found",
      "yes": "Preferences are valid"
    },
    "vehicleQuantity": {
      "addVehicleType": "&#xFF0B; Vehicle type",
      "max": "max",
      "min": "min",
      "perVehicle": "Per vehicle type:",
      "total": "Total for schedule"
    }
  },
  "prefMeta": {
    "edited": "Edited",
    "errorGettingData": "Something went wrong while getting the source data",
    "loaded": "Loaded",
    "newVersion": "There is a newer version of \"{{name}}\"",
    "source": "Source",
    "sourceDeleted": "Source was deleted"
  },
  "progress": {
    "adjusting_vehicles_to_duties": "Adjusting vehicles to duties",
    "create_piece_hooks": "Evaluating pieces hooks",
    "create_trip_hooks": "Evaluating trips hooks",
    "creating_duties": "Creating duties",
    "creating_duty_combinations": "Creating duties (pieces: {{completed_pieces}}/{{piece_count}})",
    "creating_extended_multi_piece_duty_combinations": "Creating duties (extended multi pieces: {{completed_pieces}}/{{piece_count}})",
    "creating_extended_multi_piece_pbs_vehicle_combinations": "Creating vehicles (extended pieces: {{completed_pieces}}/{{piece_count}})",
    "creating_multi_piece_duty_combinations": "Creating duties (multi pieces: {{completed_pieces}}/{{piece_count}})",
    "creating_multi_piece_pbs_vehicle_combinations": "Creating vehicles (multi pieces: {{completed_pieces}}/{{piece_count}})",
    "creating_pbs_duties": "Creating vehicles",
    "creating_pbs_pieces": "Creating vehicle pieces",
    "creating_pbs_vehicle_combinations": "Creating vehicles (pieces: {{completed_pieces}}/{{piece_count}})",
    "creating_pieces": "Creating pieces",
    "creating_vehicles": "Creating vehicles",
    "depots": {
      "advanced_allocation": "Advanced depot allocation (gap: {{gap}}%)",
      "advanced_allocation_with_iteration_limit": "Advanced depot allocation {{iteration}}/{{max_iterations}} (gap: {{gap}}%)",
      "allocating_depots": "Allocating depots",
      "initializing_advanced_allocation": "Initializing advanced depot allocation"
    },
    "diagnosing_duty_pool": "Diagnosing duty pool",
    "extended_duties_iteration": "Extended duties iteration {{iteration}}/{{max_iterations}}",
    "global_considerations": {
      "apply": "Aligning with global considerations {{iteration}}/{{max_iterations}}",
      "init": "Initializing global considerations process"
    },
    "improving_duties": "Improving duties",
    "initializing_duty_creation": "Initializing duty creation (pieces: {{completed_pieces}}/{{piece_count}})",
    "initializing_extended_multi_piece_duty_creation": "Initializing duty creation (extended multi pieces: {{completed_pieces}}/{{piece_count}})",
    "initializing_multi_piece_duty_creation": "Initializing duty creation (multi pieces: {{completed_pieces}}/{{piece_count}})",
    "initializing_multi_piece_pbs_duty_creation": "Initializing vehicle creation (multi pieces: {{completed_pieces}}/{{piece_count}})",
    "initializing_pbs_duty_creation": "Initializing vehicle creation (pieces: {{completed_pieces}}/{{piece_count}})",
    "mid_day_depots": {
      "get_parameters": "Enriching input files",
      "get_parkings": "Getting midday stops"
    },
    "multi_day_current_day": "{{day}}",
    "multi_preference_current_group": "{{group_id}}",
    "optimizing_duties": "Optimizing duties",
    "optimizing_pbs_duties": "Optimizing vehicles",
    "optimizing_vehicles": {
      "create_matrix": "Creating input files",
      "create_vehicles": "Creating vehicles"
    },
    "preparing_vehicles_for_duties": "Preparing vehicles for duties",
    "queue": "Queued {{currentPlace}}/{{max}}",
    "rosters": {
      "creating_templates": "Creating templates",
      "data_retrieved": "Data Retrieved",
      "finalizing": "Finalizing solution",
      "group_name": "{{group}}",
      "initializing_rosters": "Initializing rosters",
      "optimizing_rosters": "Optimizing rosters (iteration: {{iteration}})",
      "optimizing_templates": "Optimizing templates"
    },
    "tune_fleet_size": "Adapting to fleet size {{size}}"
  },
  "projects": {
    "addProject": "New Project",
    "confirmDeletion": {
      "message": "The project contains locked schedules. Are you sure you want to delete it?",
      "title": "Are you sure?"
    },
    "copy": {
      "copyMetaOnly": "Copy meta instances only",
      "defaultError": "The root project can't be duplicated",
      "title": " Duplicate Project"
    },
    "createNewTitle": "Create New Project",
    "dateRange": "Date range",
    "edit": {
      "placeholderDescription": "Project Description",
      "placeholderName": "Project Name",
      "title": "Edit project"
    },
    "header": "Projects",
    "new": {
      "defaultName": "Project"
    },
    "noProjects": "No projects to show",
    "remove": {
      "defaultError": "The root project can't be removed",
      "text": "Are you sure you want to delete project \"{{name}}\"?",
      "title2": "Delete a project"
    },
    "status": {
      "archived": "Archived",
      "empty": "Select Status",
      "inProgress": "In Progress",
      "operational": "Operational",
      "pending": "Pending",
      "status": "Status"
    }
  },
  "reset": {
    "button": "Set New Password",
    "cancel": "Cancel",
    "confirmationPlaceholder": "Confirm your new password",
    "errors": {
      "illegal": "Character is not allowed",
      "mismatch": "Passwords do not match",
      "noPassword": "Unable to reset password, please contact support@optibus.com for help.",
      "notFound": "Unable to reset password, please contact support@optibus.com for help.",
      "unknown": "Error resetting password. Please try again.",
      "weak": "Password is too weak"
    },
    "forgot": "Reset Password",
    "header": "Set a New Password",
    "hint": "To create a valid password, AVOID the following:\n   * Passwords under 8 characters long\n   * Common passwords or repeated numbers (123456, 1111, password, admin)\n   * Common first or last names (James, Emma, Smith, Johnson)\n   * Common words or pop culture terms (welcome, football, gameofthrones)\n   * Birthdays, anniversaries and other dates (4198, 12122002)\n   * Repeated letters, sequences or keyboard patterns (aaa, abcd, qwerty)\n   * Common modified spellings or substitutions of numbers for letters (skillz, n00b)\n   * Combinations of the above (password123, abc456, welcome1111)",
    "passwordPlaceholder": "Type your new password",
    "qualities": {
      "ok": "OK",
      "strong": "Strong",
      "weak": "Weak"
    }
  },
  "reviseElems": {
    "list": {
      "attendance": "Attendance",
      "closest_depot_on_missing": "Missing pulls",
      "custom": "Custom Enrichment",
      "deadheads": "Deadheads",
      "pre_post_trips": "Pre / post trips",
      "signing": "Sign on / off",
      "splits": "Splits",
      "taxis": "Taxis"
    },
    "okTitle": "Modify schedule",
    "subTitle": "Revise or add events to schedule",
    "title": "Add/revise events"
  },
  "rosterCalendar": {
    "droppable": {
      "dropHere": "Drop here",
      "swap": "Swap"
    },
    "emptyCell": {
      "addDuty": "Add duty"
    },
    "fullyAssigned": "Duties are fully assigned",
    "fullyAssignedFilter": "All filtered duties are assigned",
    "groups": {
      "create": "Create group",
      "disabledTooltip": "Please wait until optimization has finished",
      "groups": "Groups:",
      "manage": "Manage group preferences",
      "searchPlaceholder": "Select or create a group",
      "selectedCount": "{{count}} selected"
    },
    "moveToStack": "Move to Stack",
    "noDuties": "No available duties",
    "stackControls": {
      "allDays": "All days",
      "allDuties": "All duties",
      "allDutiesTooltip": "Showing all unassigned duties",
      "dutiesInGroup": "Current group ({{groups}})",
      "dutiesInSelectedGroup": "Duties in selected group",
      "dutiesInSelectedGroups": "Duties in selected groups",
      "dutiesWithGroup": "All groups",
      "dutiesWithGroupTooltip": "Showing only duties that are associated with at least one group",
      "dutiesWithoutGroup": "No groups",
      "dutiesWithoutGroupTooltip": "Showing only duties without a group",
      "filter": {
        "day": "Day",
        "dutyIds": "Duty IDs",
        "group": "Group",
        "title": "Filter"
      },
      "search": "Search duty ID, duty type",
      "selectedDutiesTooltip": "Showing all duties from the selected group(s)",
      "sort": {
        "asc": "Sort ascending",
        "desc": "Sort descending",
        "dutyId": "Duty ID",
        "dutyType": "Duty type",
        "time": {
          "end": "End time",
          "paid": "Paid time",
          "spread": "Spread time",
          "start": "Start time",
          "work": "Working time"
        }
      }
    },
    "threeDotsActions": {
      "changeStandby": "Change Standby",
      "clearOptional": "Clear star day",
      "dayOff": "Day off",
      "delete": "Delete",
      "duty": "Duty",
      "move": "Move",
      "moveToNewRow": "Move to new row",
      "moveToStack": "Move to stack",
      "replace": "Replace duty",
      "segment": "Segment",
      "setAsOptional": "Set as star day",
      "standby": "Standby"
    },
    "validate": {
      "groupIsValidating": "Analyzing this roster group…",
      "groupUpToDate": "This roster group has been validated and stats and KPIs are up to date",
      "isValidating": "Analyzing this roster…",
      "upToDate": "This roster has been validated and stats and KPIs are up to date"
    }
  },
  "rosterDs": {
    "folders": {
      "add": {
        "placeholderDescription": "Roster dataset folder description",
        "placeholderName": "Roster dataset folder name",
        "title": "Create new roster dataset folder"
      },
      "edit": {
        "placeholderDescription": "Roster dataset folder description",
        "placeholderName": "Roster dataset folder name",
        "title": "Edit roster dataset folder"
      },
      "remove": {
        "notEmpty": "The roster dataset folder \"{{name}}\" is not empty. Would you like to delete it and all its contents?",
        "text": "Are you sure you want to delete roster dataset folder \"{{name}}\"?",
        "title2": "Delete a roster dataset folder"
      }
    },
    "import": "Import dataset",
    "new": "New Dataset",
    "noRosterDatasets": "No roster datasets to show",
    "remove": {
      "text": "Are you sure you want to delete roster dataset \"{{name}}\"?",
      "title2": "Delete a roster dataset"
    },
    "wizard": {
      "addSchedule": "Services",
      "clearAll": "Clear all",
      "create": "Create",
      "descr": "Description",
      "edit": "Save",
      "header": "Create roster dataset",
      "headerEdit": "Edit roster dataset",
      "multipleDays": "Multiple days",
      "multipleDaysHint": "Create a roster with a selected number of days. KPIs, stats and validations are per total days selected",
      "multipleWeeks": "Multiple weeks",
      "multipleWeeksHint": "Create a multiple weeks roster where each week is a standalone roster. KPIs, stats and validations are per week",
      "multipleWeeksLabel": "Week {{first}} - Week {{last}}",
      "name": "Name",
      "selectDataset": "Dataset",
      "selectDay": "Service",
      "selectDays": "days",
      "selectSchedule": "Schedule",
      "selectTime": "Roster period",
      "selectWeeks": "weeks",
      "set": "Apply",
      "setDays": "Apply",
      "setWeek": "Match services",
      "singleWeek": "Single week",
      "singleWeekHint": "Create a one week roster. KPIs, stats and validations are per total days selected",
      "startingDay": "Start week on",
      "weekLabel": "Week {{weekIndex}}"
    }
  },
  "rosterOptimization": {
    "continueWarning": {
      "message": "Optimizing will override any roster cycle elements you've already set.",
      "title": "Continue with optimization?"
    },
    "cycle": "Roster cycle optimization",
    "generateDaysOff": "Days off",
    "generateDuties": "Duties",
    "generateSegments": "Cycle segments",
    "groupWithoutPattern": "To change the optimization settings, and enable roster cycles optimization, first associate a roster cycle preference to this roster group",
    "noRosters": "To enable roster cycle optimization, create at least one roster row",
    "selectType": "Select optimization type",
    "standard": "Default optimization (no roster cycles)",
    "whatToOptimize": "Which cycle elements should be optimized?"
  },
  "rosterSchedule": {
    "badId": "ID already in use",
    "badIdEmpty": "ID can't be empty",
    "badName": "Name already in use",
    "badNameEmpty": "Name can't be empty",
    "cantMove": "Reset sorting to manual reorder the roster",
    "edit": {
      "placeholderDescription": "Roster Schedule Description",
      "placeholderName": "Roster Schedule Name",
      "title": "Edit Roster Schedule"
    },
    "folders": {
      "add": {
        "placeholderDescription": "Roster Schedule Folder Description",
        "placeholderName": "Roster Schedule Folder Name",
        "title": "Create New Roster Schedule Folder"
      },
      "edit": {
        "placeholderDescription": "Roster Schedule Folder Description",
        "placeholderName": "Roster Schedule Folder Name",
        "title": "Edit Roster Schedule Folder"
      },
      "remove": {
        "notEmpty": "The Roster schedule folder \"{{name}}\" is not empty. Would you like to delete it and all its contents?",
        "text": "Are you sure you want to delete roster schedule folder \"{{name}}\"?",
        "title2": "Delete a roster schedule folder"
      }
    },
    "hiddenStats": "This stat can't be viewed as the current view shows more than one week",
    "import": "Import Roster Schedule",
    "new": "New Roster Schedule",
    "noRosterSchedules": "No roster schedules to show",
    "remove": {
      "text": "Are you sure you want to delete roster schedule \"{{name}}\"?",
      "title2": "Delete a roster schedule"
    },
    "versionConflict": {
      "datasetEdit": {
        "hasNewVersionMessage": "This roster’s dataset has been edited by {{user}} on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "hasNewVersionMessageBySelf": "There is an updated version of this roster (you edited the roster dataset on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "rosterUpdatedBySelfMessage": "You have edited this roster’s dataset in another tab. Refresh the page to work on the latest version, or save this version as a new roster",
        "rosterUpdatedMessage": "This roster’s dataset has been edited by {{user}} (last update on {{date}} at {{time}}). Refresh the page once the user is finished, or save this version as a new roster."
      },
      "generalUpdate": {
        "hasNewVersionMessage": "There is an updated version of this roster (updated by {{user}} on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "hasNewVersionMessageBySelf": "There is an updated version of this roster (updated by you on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "rosterUpdatedBySelfMessage": "You have updated this roster in another tab. Refresh the page to work on the latest version, or save this version as a new roster",
        "rosterUpdatedMessage": "This roster has been updated by {{user}} (last update on {{date}} at {{time}}). Refresh the page once the user is finished, or save this version as a new roster."
      },
      "generatePattern": {
        "hasNewVersionMessage": "A roster cycle was generated by {{user}} on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "hasNewVersionMessageBySelf": "There is an updated version of this roster (you generated a roster cycle on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "rosterUpdatedBySelfMessage": "You generated a roster cycle for this roster in another tab. Refresh the page to work on the latest version, or save this version as a new roster",
        "rosterUpdatedMessage": "A roster cycle was generated by {{user}} (last update on {{date}} at {{time}}). Refresh the page once the user is finished, or save this version as a new roster."
      },
      "hasNewVersionTitle": "Roster has updated version",
      "importCompact": {
        "hasNewVersionMessage": "A new version of this roster was imported by {{user}} on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "hasNewVersionMessageBySelf": "There is an updated version of this roster (you imported a new version on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "rosterUpdatedBySelfMessage": "You imported a new version of this roster in another tab. Refresh the page to work on the latest version, or save this version as a new roster",
        "rosterUpdatedMessage": "A new version of this roster was imported by {{user}} (last update on {{date}} at {{time}}). Refresh the page once the user is finished, or save this version as a new roster."
      },
      "importFrom": {
        "hasNewVersionMessage": "Days off were imported to this roster by {{user}} on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "hasNewVersionMessageBySelf": "There is an updated version of this roster (you imported days off on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "rosterUpdatedBySelfMessage": "You imported days off to this roster in another tab. Refresh the page to work on the latest version, or save this version as a new roster",
        "rosterUpdatedMessage": "Days off were imported to this roster by {{user}} (last update on {{date}} at {{time}}). Refresh the page once the user is finished, or save this version as a new roster."
      },
      "optimize": {
        "hasNewVersionMessage": "This roster has been optimized by {{user}} on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "hasNewVersionMessageBySelf": "There is an updated version of this roster (you performed an optimization on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "rosterUpdatedBySelfMessage": "You have optimized this roster in another tab. Refresh the page to work on the latest version, or save this version as a new roster",
        "rosterUpdatedMessage": "This roster has been optimized by {{user}} (last update on {{date}} at {{time}}). Refresh the page once the user is finished, or save this version as a new roster."
      },
      "projectWeek": {
        "hasNewVersionMessage": "A weekly projection was made to this roster by {{user}} on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "hasNewVersionMessageBySelf": "There is an updated version of this roster (you made a weekly projection on {{date}} at {{time}}). Open the latest version, or save this version as a new roster.",
        "rosterUpdatedBySelfMessage": "You made a weekly projection to this roster in another tab. Refresh the page to work on the latest version, or save this version as a new roster",
        "rosterUpdatedMessage": "A weekly projection was made to this roster by {{user}} (last update on {{date}} at {{time}}). Refresh the page once the user is finished, or save this version as a new roster."
      },
      "rosterUpdatedBySelfTitle": "Roster updated in another tab",
      "rosterUpdatedTitle": "Roster updated by another user",
      "unableToDiscardRoster": "Unable to discard roster",
      "unableToSaveRoster": "Unable to save roster",
      "wasChangeAfterDiscard": {
        "rosterUpdatedBySelfMessage": "The roster could not be discarded because an update was simultaneously in progress. Go back to the roster and save again."
      },
      "wasChangeAfterSave": {
        "rosterUpdatedBySelfMessage": "The roster could not be saved because an update was simultaneously in progress. Go back to the roster and save again."
      }
    },
    "weekNavigation": {
      "info": "{{from}}-{{to}} of {{total}} days",
      "nextDay": "Next day",
      "nextSevenDays": "Next 7 days",
      "nextWeek": "Next week",
      "prevDay": "Previous day",
      "prevSevenDays": "Previous 7 days",
      "prevWeek": "Previous week",
      "week": "Week {{weekNo}}"
    },
    "weekProjection": {
      "alternationOption": "Alternate weekday duties",
      "alternationOptionHint": "Weekday duties will alternate between pairs of lines",
      "beteweenWeeksHint": "Between weeks view can't be projected",
      "confirmDialog": {
        "confirmButtonAllWeeks": "Yes, project to all following weeks",
        "confirmButtonNextWeek": "Yes, project to next week",
        "message": "There are some validation issues in the roster week you are about to project (you can see the details on the issue panel). We recommend that your resolve the issues before projecting. Project now anyway?",
        "titleAllWeeks": "Project to all following weeks?",
        "titleNextWeek": "Project to next week?"
      },
      "cycleLogicTitle": "Logic Cycle",
      "cycleSizeErrorHint": "Value should be between 2 and {{rosterLines}}",
      "cycleSizeOption1": "Cycle of",
      "cycleSizeOption2": "roster lines",
      "cycleSizeOptionHint": "The logic will be applied within each block of the defined number of roster lines",
      "followingWeeksProjectionCompleted": "Weeks {{startIndex}}-{{endIndex}} have been assigned. Navigate to those weeks to view the assignments.",
      "fullCycleOption": "Full Cycle",
      "fullCycleOptionHint": "The logic will be applied to all roster lines",
      "issueTable": {
        "columns": {
          "message": "Message",
          "rosterLine": "Roster Line"
        },
        "empty_cells_in_non_spare_lines": "Roster line should be fully assigned.",
        "issuesTableMessagePlural": "Projection could not be completed because of the issues described below. Resolve the issues and then project again.",
        "issuesTableMessageSingular": "Projection could not be completed because of the issue described below. Resolve the issue and then project again.",
        "multi_rows_with_same_dominant": "Duty {{dutyId}} is assigned to multiple roster lines on weekdays. The duty can only be assigned to one of those roster lines.",
        "title": "Projection could not be completed"
      },
      "lastWeekHint": "There are no more weeks to project to",
      "multiWeeksProjectionCompletedWithEmpty": "{{periodsWithEmptyCells}} of the weeks have not been fully assigned. Navigate between weeks to view the assignments.",
      "nextWeekProjectionCompleted": "Week {{startIndex}} has been assigned. Navigate to that week to view the assignments.",
      "noRowsToProject": "There are no roster lines to project",
      "projectionCompletedTitle": "Projection completed successfully",
      "projectionCompletedWithWarningsTitle": "Projection completed",
      "projectLogicTitle": "Logic",
      "projectToFollowingWeekRadio": "All weeks (Week {{weekNumber}})",
      "projectToFollowingWeeks": "Project to all weeks",
      "projectToFollowingWeeksHint": "Project to weeks {{startIndex}}-{{endIndex}}",
      "projectToFollowingWeeksRadio": "All weeks (Weeks {{startIndex}}-{{endIndex}})",
      "projectToNextWeek": "Project to next week",
      "projectToNextWeekHint": "Project to week {{weekNumber}}",
      "projectToNextWeekRadio": "Next week (Week {{weekNumber}})",
      "projectToTitle": "Project to",
      "rotationOption": "Rotate days off & weekend duties",
      "rotationOptionHint": "Days off and weekend duties will rotate through each roster line",
      "singleWeekProjectionCompletedWithEmpty": "Roster week has not been fully assigned. Navigate between weeks to view the assignments."
    }
  },
  "rosterTooltip": {
    "assignTooltip": "This duty is assigned to roster {{name}}",
    "assignTooltipGroup": "This duty is assigned to roster {{name}} in group {{group}}",
    "blocks": "blocks",
    "paidTime": "paid time",
    "routes": "routes",
    "searchPlaceholder": "Search duty ID...",
    "shortPaidTime": "PT",
    "spreadTime": "spread time",
    "time": "time",
    "viewCrew": "View this duty in the crew schedule",
    "warnings": "warnings",
    "workTime": "work time"
  },
  "schedule": {
    "bi": {
      "dashboards": {
        "caption": "Go to dashboards",
        "description": "Explore, analyze and compare your scenarios with interactive visuals"
      },
      "done": "Loaded successfully! Your schedule is ready for analytics.",
      "goto": "Analytics",
      "gotoRoster": "Roster analytics",
      "header": "Export To analytics",
      "loading": "Loading your schedule…",
      "reports": {
        "caption": "Go to reports",
        "description": "View, filter, sort and download your data in tabular form"
      }
    },
    "export": {
      "apply": "Apply",
      "chooseDay": "Choose Service: ",
      "title": "Generate a Comparison Report"
    },
    "import": {
      "allowOriginDestinationChanges": "Allow non-matching origin or destination\n",
      "allowOriginDestinationChangesHint": "This enables you to import the schedule for trips on the same route even if those trips don’t have the same origin or destination. Doing so may result in missing deadheads, and is only possible if continuous attendance is not enabled.",
      "apply": "Apply",
      "applyOn": "Apply on:",
      "chooseDay": "Choose service: ",
      "currDay": "Current service schedule:",
      "departureDelta": "Max start time difference: ",
      "departureDeltaTooltip": "Define the maximum difference between trip start times in the current schedule and the imported schedule. Any trips on the current schedule that exceed this difference will be placed in the stack.",
      "ignoreVehicleTypes": "Ignore vehicle types",
      "includeModifiedTrips": "Include modified trips",
      "includeTrips": "Include modified trips",
      "mergeWithLocked": "Apply to unlocked rows only",
      "mergeWithLockedHint": "This will merge the schedules, applying changes to unlocked rows only. Your preferences will not change.",
      "pasteMode": {
        "modePaste": "Paste schedule url",
        "modeSelect": "Select dataset & schedule",
        "pasteText": "Paste schedule URL you want to import",
        "urlError": "It looks like this doesn’t link to a schedule",
        "urlErrorNoSchedule": "It looks like this doesn’t link to a schedule",
        "urlErrorProject": "The schedule needs to be in this project"
      },
      "retainDeletedDuties": "Retain deleted duties",
      "retainDeletedDutiesHint": "Retain duties from the source schedule when none of a duty's trips exist in this schedule",
      "title": {
        "dataset": "Import a different schedule",
        "day": "Import a different service",
        "toDay": "Apply schedule on another service"
      },
      "vehiclesOnly": "Vehicles only"
    },
    "locking": {
      "all": "all users",
      "diagnostic": "Diagnostic Schedule (read-only)",
      "editableBy": "Editable (by {{owner}})",
      "editableByAll": "Editable by all users",
      "editableByMe": "Editable only by me",
      "me": "me",
      "operational": "Operational",
      "operationalBy": "Operational (locked by {{owner}})",
      "readOnly": "Read-only",
      "readonlyBy": "Read-only (locked by {{owner}})",
      "readOnlySchedule": "Read-only schedule",
      "readOnlyUser": "Read-only user",
      "roster": "roster"
    },
    "menu": {
      "export": "Export",
      "exportMenu": {
        "export": "Current schedule",
        "exportAllDaysCaption": "Export all days",
        "exportAllDaysHint": "Export schedule for all days",
        "exportAllServicesCaption": "Export all services",
        "exportAllServicesHint": "Export schedule for all services",
        "exportAllTimetable2datasetCaption": "All services",
        "exportAllTimetable2datasetHint": "Create new dataset from all the services of the timetable",
        "exportComparison": "Compare",
        "exportCurrTimetable2datasetCaption": "Current service",
        "exportCurrTimetable2datasetHint": "Create new dataset from the timetable of current service only",
        "exportDayCaption": "Export current day",
        "exportDayHint": "Export the schedule of current day only",
        "exportServiceCaption": "Export current service",
        "exportServiceHint": "Export the schedule of the current service",
        "exportTimetable2datasetCaption": "Create dataset",
        "exportTimetable2datasetHint": "Create new dataset from this timetable",
        "exportTimetable2fileCaption": "Export to file",
        "exportTimetable2fileHint": "Export to file",
        "exportToBI": "Export to analytics",
        "exportToBIHint": "Export the schedule to analytics",
        "exportTrips": "Export trips",
        "exportTripsHint": "Exports schedule's trips"
      },
      "exportRoster": "Export",
      "import": "Import",
      "importMenu": {
        "days2": "Import a different service",
        "file2": "Import file",
        "fleetControlCaption": "Fleet control",
        "fleetControlHint": "Import corresponding schedule from fleet control",
        "fromRoster": "Import days off from a different roster",
        "schedule2": "Import a different schedule",
        "toDays": "Apply to another service"
      },
      "importRoster": {
        "cycles": "Cycles",
        "daysOff": "Days off",
        "duties": "Duties",
        "flowDescription": "Current days off will be replaced with days off from the imported roster. Locked roster lines will be unlocked and modified.",
        "groupLabel": "Group:"
      },
      "manual": "Manual scheduling",
      "notifications": "Notifications",
      "preferences": "Preferences",
      "rosters": "Rosters",
      "scheduleName": "Edit schedule name",
      "schedules": "Schedules",
      "scheduleUpdates": {
        "analyzeRoster": "Analyze",
        "analyzeRosterGroups": "Analyze all roster groups",
        "analyzeRosterGroupsHint": "Validate all roster groups and update their stats and KPIs",
        "analyzeRosterHint": "Validate this roster and update its stats and KPIs",
        "clearDutiesCaption": "Clear duties",
        "clearDutiesHint": "Remove all duties from the schedule",
        "clearReliefVehiclesCaption": "Clear relief vehicles",
        "clearReliefVehiclesHint": "Remove all relief vehicles from the schedule",
        "createStatsCaption": "Analyze",
        "createStatsHint": "Validate this schedule and update its stats and KPIs",
        "generateIds": {
          "both": "Vehicles & duties",
          "bothTip": "Generate new IDs for both vehicles and duties",
          "duties": "Duties",
          "dutiesTip": "Generate new IDs for the duties",
          "rosterTip": "Generate new IDs for rosters",
          "title": "Generate IDs",
          "vehicles": "Vehicles",
          "vehiclesTip": "Generate new IDs for the vehicles"
        },
        "list": "Schedule updates",
        "reviseCaption": "Revise events",
        "reviseHint": "Revise and add missing events to the schedule",
        "updateTripsCaption": "Update trips",
        "updateTripsHint": "Update the trips of the schedule"
      },
      "settings": "General settings",
      "viewOnly": "Read only"
    },
    "model": {
      "area": "Area",
      "arrivalTime": "Arrival",
      "boarding_time": "Boarding Time",
      "custom": "Custom",
      "daysOfTheWeek": "Days",
      "departureTime": "Departure",
      "distance": "Distance",
      "id": "Trip ID",
      "offboarding_time": "Alighting Time",
      "routePopulated": {
        "alternative": "Alt.",
        "destination_stop_id": "Destination Stop ID",
        "destination_stop_name": "Destination Stop Name",
        "direction": "Dir.",
        "origin_stop_id": "Origin Stop ID",
        "origin_stop_name": "Origin Stop Name",
        "sign": "Route"
      },
      "vehicleComputed": "Vehicle"
    },
    "saveAs": {
      "placeholderDescription": "Schedule description",
      "placeholderName": "Schedule name",
      "title": "Save as"
    },
    "title": {
      "discarded": "Discarded schedule",
      "name": "Schedule name",
      "unsaved": "Unsaved schedule"
    },
    "updatedBy": {
      "unsaved": "unsaved"
    }
  },
  "select": {
    "emptyDropdown": "Select",
    "missingPatterns": "Missing patterns",
    "notAvailable": "Not available",
    "unexistingItem": "No such item"
  },
  "slidingMenu": {
    "bin": "Bin",
    "datasets": "Datasets",
    "deadheadCatalogs": "Catalogs",
    "exporter": "Protocols",
    "helpCenter": "Help Center",
    "jobList": "Task List",
    "legal": "Legal",
    "linkedTimeplan": "Linked Timeplan",
    "litmos": "Optibus Academy",
    "litmosHint": "Training Courses",
    "preferences": "Preferences",
    "projects": "Projects",
    "reporter": "Reports",
    "rosterDatasets": "Roster Datasets",
    "rosters": "Rosters",
    "saveAs": "Save As...",
    "saveToNewDataSet": "Save to New Dataset",
    "schedules": "Schedules",
    "support": "Support",
    "timetables": "Timeplans",
    "trips": "View Trips"
  },
  "standbyTooltip": {
    "depot": "Depot:",
    "title": "Standby vehicles",
    "type": "Type:",
    "vehicle": "Vehicle:"
  },
  "stopDialog": {
    "dropDownHeader": "Select Stop",
    "drowDownHeaderDisabled": "Selected Stop",
    "noStops": "Oops. No data to display",
    "prevDeadHeadSegment": "Previous Segment Is Deadhead",
    "relinkButton": "Restore & link",
    "relinkHint": "Restoring will link this to the main pattern and load its stop properties",
    "stopProperties": "Stop Properties"
  },
  "tableActions": {
    "copy": "Copy",
    "copyTo": "Copy to",
    "datasets": "Schedule Datasets",
    "disable": "Disable",
    "drafts": "History",
    "edit": "Edit",
    "enable": "Enable",
    "fileViewPerm": "Toggle file view hide/show",
    "move": "Move",
    "newTabDS": "Open in new tab",
    "newTabRS": "Open in new tab",
    "newTabTP": "Open in new tab",
    "preview": "Preview",
    "remove": "Delete",
    "rosterDatasets": "Roster Datasets",
    "save": "Save",
    "timeplans": "Timeplans",
    "weeklyConvert": "Convert"
  },
  "tableColumns": {
    "createdAt": "Created at",
    "createdBy": "Created by",
    "datasetName": "Dataset",
    "deletedAt": "Deleted at",
    "description": "Description",
    "draft": "Draft",
    "duration": "Duration",
    "endTime": "End",
    "modified": "Modified",
    "name": "Name",
    "revision": "Revision",
    "startTime": "Start",
    "status": "Status",
    "taskId": "Task ID",
    "updatedAt": "Updated at",
    "updatedBy": "Updated by",
    "user": "User"
  },
  "tableParam": {
    "add": "Add Row"
  },
  "taskType": {
    "attendance": "Attendance",
    "backup": "Standby",
    "break": "Break",
    "car": "Car",
    "deadhead": "Deadhead",
    "depot_pull_in": "Pull-in",
    "depot_pull_out": "Pull-out",
    "idle": "Deadhead",
    "layover": "Layover",
    "new": "New",
    "other_travel": "Other Travel",
    "post_trip": "Post-trip",
    "pre_trip": "Pre-trip",
    "public_travel": "Public Transportation",
    "recharge": "Recharge",
    "refuel": "Refuel",
    "relief": "Relief vehicle",
    "relief_car": "Relief Car",
    "service": "Service",
    "sign_off": "Sign off",
    "sign_on": "Sign on",
    "split": "Split",
    "tapt": "Public transportation",
    "taxi": "Taxi",
    "vehicle_preparation": "Vehicle preparation",
    "walk": "Walk"
  },
  "temporaryWarningWhenNoVIP": "This preference requires advanced vehicle optimization. Contact support to enable it.",
  "term": {
    "changeover": "changeover",
    "changeovers": "changeovers",
    "confirmTitle": "Are you sure?",
    "dataset": "dataset",
    "deadhead_catalog": "Deadhead catalog",
    "depot": "depot",
    "distance": "distance",
    "duty": "duty",
    "noData": "No data to display",
    "noResults": "No results found",
    "noResultsFor": "No results found for",
    "noStandBys": "No available standby options",
    "place": "place",
    "places": "places",
    "roster_dataset": "roster data set",
    "route": "route",
    "routes": "routes",
    "schedule": "schedule",
    "stop": "stop",
    "stops": "stops",
    "taxi_catalog": "Taxi catalog",
    "trip": "trip",
    "trips": "trips",
    "vehicle": "vehicle",
    "vehicle block": "vehicle block",
    "vehicle type": "vehicle type",
    "vehicle types": "vehicle types",
    "vehicle_block": "vehicle block",
    "vehicle_type": "vehicle type",
    "vehicle_types": "vehicle types"
  },
  "themis": {
    "errors": {
      "getPrefError1": "Unable to read preference template file, on second try, at {{prefFilePath}} for {{prefType}/{{prefName}} (Original error: {{firstError})",
      "getPrefError2": "Unable to read preference template file at {{metaFilePath}} for {{prefType}/{{prefName}}",
      "metaFileError": "Unable to read meta file at {{metaFilePath}} for {{prefType}/{{prefName}}",
      "missing": "Unable to find preference called {{prefName}}",
      "noReadableTemplate": "No template file found at {{prefFilePath}} for {{prefType}/{{prefName}}",
      "templateFileError": "Unable to read preference template file at {{prefFilePath}} for {{prefType}/{{prefName}}"
    }
  },
  "timeplans": {
    "addTimeplan": "New Timeplan",
    "header": "Timeplans",
    "importFromService": {
      "alsoTimes": "Import running times too (Will override existing running times and time bands)",
      "noServicesError": "There are no service IDs with data in this route",
      "subTitle": "Choose a service ID  to import",
      "timesTitle": "Import running times from a different service ID",
      "tripsTitle": "Import trips from a different service ID"
    },
    "importTimeplan": "Import Timeplan",
    "menu": {
      "addData": "Add to existing data",
      "addDataHint": "Extend the data with the new data",
      "download": "Download",
      "downloadHint": "Download a file",
      "downloadListOfStops": "Stop catalog",
      "downloadListOfStopsHint": "Download CSV file with the stop catalog",
      "downloadRoutesData": "Additional route data",
      "downloadRoutesDataHint": "Download CSV file with additional route data",
      "downloadStopsData": "Stop properties",
      "downloadStopsDataHint": "Download CSV file with additional stop data",
      "downloadTimeplan": "Timeplan (JSON)",
      "downloadTimeplanExcel": "Timeplan (Excel)",
      "downloadTripsData": "Trip stop labels",
      "downloadTripsDataHint": "Download Excel file with additional trip data and stop labels",
      "downloadTripsDataNoStops": "Trip properties",
      "downloadTripsDataNoStopsHint": "Download Excel file with additional trip data",
      "exportToDataset": "Export to dataset",
      "exportToDatasetHint": "Create a new dataset from the current timeplan",
      "exportToFileHint": "Create a JSON file from the current timeplan",
      "exportToFileHintExcel": "Create a excel file from the current timeplan",
      "generateIds": {
        "confirmDialog": {
          "message": "Generating new trip IDs will affect all the routes in this timeplan. To generate new IDs, click Continue.",
          "title": "Generate trip IDs"
        },
        "error": {
          "summaryIllegalChar": "Trip id containts illegal charachters (\".\", \"?\" \"\")",
          "summaryUndefined": "Trip id contains \"undefined\". might be related to empty context: {{context}}.",
          "title": "Some trips IDs could not be generated"
        },
        "generateMenuHint": "ID generator",
        "generateTripIds": "Generate trip IDs",
        "generateTripIdsHint": "Generate new trip IDs for the entire timetable."
      },
      "importCompleted": "Import completed",
      "importFromAnotherService": "Import a different service ID",
      "importFromAnotherServiceConfirm": {
        "times": {
          "message": "Are you sure you want to import running times from a different service ID? All running times on {{service}} for route {{sign}}, including all route patterns and both directions, will be replaced by the running times you import.",
          "title": "IMPORT TRAVEL TIME"
        },
        "trips": {
          "message": "Are you sure you want to import trips from a different service ID? All trips on {{service}} for route {{sign}}, including all route patterns and both directions, will be replaced by the trips you import.",
          "title": "IMPORT TRIPS"
        }
      },
      "importRoute": "Import route",
      "importRouteHint": "Import route from another timeplan",
      "importRoutesData": "Import additional route data",
      "importRoutesDataHint": "Import other data related to your routes",
      "importStops": "Import stop catalog",
      "importStopsData": "Import stop properties",
      "importStopsDataHint": "Import other data related to your stops",
      "importStopsHint": "Import a stop catalog into this timeplan",
      "importStopsModification": "The location of at least one of the stops you're importing has been edited. This can affect the shape of any route associated with this stop. Do you want to continue importing?",
      "importStopsWarningMessage": "Some of the stops can't be uploaded due to the following errors:",
      "importStopsWarningTitle": "Upload Warning",
      "importTimesFromAnotherServiceHint": "Import timebands from a different service ID",
      "importTripsData": "Import Trip data",
      "importTripsDataBySequence": {
        "message": "We noticed that you are importing an Excel file that has some variations from the current timeplan.\nDo you want to try and apply its properties and labels to the current timeplan when encountering these variations?",
        "title": "Excel varies from current timeplan"
      },
      "importTripsDataFailureReport": {
        "message": "The properties of {{failedTrips}} out of {{totalTrips}} trips and labels of {{failedTripStops}} out of {{totalTripStops}} trip stops were not loaded successfully.\nClick download below for an Excel file of the ones that were not imported.",
        "title": "Not all properties or labels were imported"
      },
      "importTripsDataHint": "Import other data related to your trips",
      "importTripsDataSuccess": {
        "message": "The properties of all {{trips}} trips and labels of all {{stops}} trip stops were loaded successfully.",
        "title": "Properties and labels imported successfully"
      },
      "importTripsFromAnotherServiceHint": "Import trips from a different service ID",
      "map": "Map",
      "overrideData": "Override existing data",
      "overrideDataHint": "Clear all data, and add new data",
      "preferences": "Preferences",
      "route": "Route",
      "stopsCatalogImportedSuccessfully": "The stops catalog was imported successfully",
      "timeplan": "Timeplan",
      "timeplans": "Timeplans",
      "timetable": "Timetable",
      "travelTimes": "Running times",
      "updateStops": "Update stops"
    },
    "missing_stops": "This pattern has fewer than two time-points",
    "naptanPreserveTitle": "PRESERVE",
    "naptanStopLocationField": "Stop Location",
    "noRoutes": "No routes available",
    "noRoutesSubTitle": "To create your route, click the \"+\" icon",
    "noRoutesTitle": "Create your first route",
    "noServiceSubTitle1": "To assign, go to the ",
    "noServiceSubTitle3": " and select the service IDs for this route",
    "noServiceTitle": "Assign service IDs to route {{sign}}",
    "noStopsSubTitle1": "To start, click on the ",
    "noStopsSubTitle2": "Route tab",
    "noStopsSubtitle2": "Route tab",
    "noStopsSubTitle3": " enter the route's stops and timepoints",
    "noStopsTitle": "Just two more steps before you can add trips to route '{{sign}}'...",
    "notEnoughRoutesInGroupTitle": "There are not enough routes assigned to this route group direction.",
    "notEnoughStopsTitle": "Just one more step before you can set up timebands for route '{{sign}}'...",
    "notEnoughtRoutesInGroup1": "Try assigning at least 2 routes, or switch to a different direction.",
    "noTimeplans": "No timeplans available",
    "noTimesButTripsTitle": "To see your trips for route \"{{sign}}\", first add running times",
    "noTimesNoTripsTitle": "Paste trips from Excel or enter running times",
    "noTimesSubTitle1": "To start, click on ",
    "noTimesSubTitle2": "Timebands",
    "noTimesSubTitle3": " and define the route's travel time",
    "noTimesUsePaste1": ". By the way, you can use the ",
    "noTimesUsePaste2": " action to add trips. The app will calculate the timebands automatically.",
    "noTimesUsePasteButton": "Copy and Paste",
    "pattern": {
      "addTitle": "Add pattern",
      "deletePattern": "Delete pattern",
      "description": "Description",
      "descriptionPlaceholder": "Enter description (optional)",
      "dotInPatternNameError": "Pattern name may not contain \".\" (dot character)",
      "duplicateDialogTitle": "Copy pattern {{name}}",
      "duplicateNameError": "This pattern name is already taken",
      "duplicateTitle": "Copy pattern",
      "editAction": "Edit pattern",
      "editTitle": "Edit pattern",
      "main": "Main pattern",
      "nameLabel": "Pattern name",
      "namePlaceholder": "Enter pattern name",
      "newPatternMessage": "Please create a new pattern to be associated with the edited trip.",
      "noNameError": "Pattern name is missing",
      "patternSelection": "Pattern Source"
    },
    "preferences": {
      "direction": "Direction",
      "errors": {
        "saveFailed": {
          "error": "Preferences could not be saved",
          "message": "Please check the preference. If the problem persists, contact a member of our team for assistance."
        }
      },
      "fieldLabels": {
        "frequency": "HEADWAY:",
        "numberOfTrips": "Number of Trips:",
        "overallTrips": "Minimum number of trips, including full trips",
        "pattern": "Pattern:",
        "status": "Status:",
        "stop": "Stop:",
        "time": "Time:",
        "timebands": "Timebands:",
        "trip": "Trip:"
      },
      "pattern": "Pattern",
      "pleaseSelect": "Please select a preference from the list on the left",
      "quantityConditions": {
        "atLeast": "At least",
        "atMost": "At most",
        "exactly": "Equals to"
      },
      "route": "Route",
      "service": "Service ID",
      "whatTime": {
        "at": "At",
        "earlier": "Earlier than",
        "later": "Later than"
      },
      "whichTrip": {
        "first": "First trip",
        "last": "Last trip"
      }
    },
    "remove": {
      "text": "Are you sure you want to delete timeplan \"{{name}}\"?",
      "title2": "Delete a timeplan"
    },
    "reverseTimesBatchEdit": {
      "applyButton": "Revert times",
      "header": "Revert stop arrival times",
      "headerInfo": "Revert stop arrival times to those defined by the Running Times tab"
    },
    "route": {
      "addPatternButton": "Add a pattern",
      "addTitle": "Create New Route",
      "circular": "Circular",
      "codeLabel": "Route Code",
      "codePlaceholder": "Enter route code (optional)",
      "convertRouteConfirmText": "A route without a main pattern can't be converted back to a route with a main pattern. Proceed anyway?",
      "convertRouteConfirmTitle": "Convert Route",
      "convertToIndependent": "Convert to route without a main pattern",
      "copyButtonTitle": "Copy",
      "copyTitle": "Copy route",
      "copyToAllPatterns": "Sync distances and paths to all patterns",
      "delete": "Delete route",
      "deleteConfirmText": "Are you sure you want to delete route {{sign}}?\nAll of its directions and patterns along with their running times and trips will be deleted as well. This can't be undone",
      "deleteConfirmTitle": "Delete Route",
      "deleteDirection": "Delete Direction",
      "deleteDirectionConfirmText": "Are you sure you want to delete the {{name}} direction?\nAll of its patterns along with their running times and trips will be deleted as well. This can't be undone",
      "deleteDirectionConfirmTitle": "Delete direction",
      "deletePatternAddDefaultPattern": "We will add a default pattern since a list of stops must have at least one pattern.",
      "deletePatternConfirmText": "Are you sure you want to delete pattern {{name}}?\nAll of its running times and trips will be deleted as well. This can't be undone.",
      "deletePatternConfirmTitle": "Delete Pattern",
      "deleteTimesConfirmText": " Are you sure you want to clear the running times of pattern {{pattern}}?",
      "deleteTimesConfirmTitle": "Clear Pattern's Tunning Times",
      "direction": "Direction",
      "directionPlaceholder": "Type the route name",
      "editName": "Edit route name",
      "editTitle": "Edit route",
      "group": {
        "addDirection": "+ Add Direction",
        "createGroup": "Create group",
        "deleteConfirmText": "Are you sure you want to delete group \"{{groupName}}\"?",
        "deleteGroupText": "Delete group",
        "directionName": "Direction Name",
        "editGroup": "Edit Group",
        "groupNameTitle": "Group Name",
        "placeholders": {
          "directionName": "Type direction name...",
          "groupName": "Enter group Name...",
          "routes": "Select routes..."
        },
        "removeDirection": "× Remove direction",
        "validations": {
          "enterValidName": "Please enter a valid name.",
          "selectAtLeast2Routes": "Please select at least two routes.",
          "selectRoutes": "Please select routes.",
          "takenName": "This name is already taken."
        }
      },
      "headerLabel": "Header",
      "headerPlaceholder": "Enter route header (optional)",
      "inbound": "Inbound",
      "independentPattern": "Route without main pattern",
      "list": "List",
      "mainPattern": "Main pattern",
      "mapDistanceTooltip": "Map distance {{mapDistance}}",
      "nameLabel": "Route Name",
      "namePlaceholder": "Enter route name",
      "noteLabel": "Via Note",
      "notePlaceholder": "Enter via note (optional)",
      "outbound": "Outbound",
      "pasteRouteConfirmText": "Are you sure you want to paste from Excel? All existing data about the current route, including its patterns, running times and trips, will be overridden.",
      "pasteRouteConfirmTitle": "Paste from Excel and Override Data",
      "pasteTimesConfirmText": "Are you sure you want to paste from Excel? This pattern's running times will be overridden, and the related trips will be recalculated according to the new running times.",
      "pasteTimesConfirmTitle": "Override Travel Time Data",
      "pasteTripsConfirmText": "Are you sure you want to paste from Excel? All existing trips for this direction of route \"{{name}}\" for this service ID will be overridden, and the related running times will be recalculated.",
      "pasteTripsConfirmTitle": "Override Trip Data",
      "regularMainPattern": "Route with main pattern",
      "routeTypeInfo": "Select whether the new route should be a main route or an alternative route pattern that is not derived from a main route.",
      "setAsMain": "Flag as main pattern",
      "sign": "Route",
      "syncFromMain": "Sync distances and paths from main pattern",
      "syncFromMap": "Sync distances from path",
      "typeLabel": "Route Type",
      "validation": {
        "code": "This route code is already taken",
        "invalidDirectionName": "Direction name has invalid character: ",
        "missingDirection": "Direction name is missing",
        "missingName": "Route name is missing",
        "name": "This route name is already taken. Add a route code in order to complete the action."
      }
    },
    "saveAs": {
      "placeholderDescription": "Timeplan description",
      "placeholderName": "Timeplan name",
      "title": "Save as"
    },
    "services": {
      "confirmDialog": {
        "dontRemove": "No, don't remove",
        "message": "Remove all trips for Route \"{{route_id}}\" that operate on \"{{service_id_name}}\"?</br>Deselecting the service ID for this route removes all associated trips from the schedule.",
        "title": "remove trips",
        "yesRemove": "Yes, remove trips"
      },
      "listRegularEmpty": "No service IDs yet",
      "listRegularTitle": "Service IDs",
      "listServiceGroupsEmpty": "No service groups yet",
      "listServiceGroupTitle": "Service Groups",
      "listSpecialEmpty": "No special service ID added ",
      "listSpecialTitle": "Special service ID",
      "name": "name",
      "nameExists": "This name is already taken",
      "partOfGroup": "This service is part of a service group",
      "regular": {
        "add": {
          "daysInfo": "Select the days included in the service ID.",
          "nameInfo": "Click to edit the name of the service ID.",
          "routesExplain": "Select the routes assigned to the service ID.",
          "title": "Add Service ID"
        },
        "clone": {
          "copyOfPrefix": "Copy of",
          "daysInfo": "Select or deselect the days included in the copied service ID.",
          "nameInfo": "Click to edit the name of the copied service ID.",
          "optionTitle": "Copy",
          "routesExplain": "Select or deselect the routes assigned to the copied service ID.",
          "title": "Copy Service ID",
          "topInfo": "Copying the service ID will also copy all associated running times, trips and settings."
        },
        "daysInfoLocal": "(Editing the service days does not impact other routes)",
        "daysTitle": "Service days",
        "deleteConfirmText": "Are you sure you want to delete this service ID, including all of its assigned trips on all routes in {{timeplan}}? This can't be undone.",
        "deleteConfirmTitle": "Delete service ID",
        "edit": {
          "daysInfo": "Select or deselect the days included in the service ID.",
          "nameInfo": "Click to edit the name of the service ID.",
          "optionTitle": "Edit",
          "routesExplain": "Select or deselect the routes assigned to the service ID.",
          "title": "Edit Service ID"
        },
        "editLocal": "Apply to this route only",
        "emptyInterSectionError": "Can't exclude service day",
        "namePlaceholder": "e.g., Sunday night",
        "routesPlaceholder": "Select routes"
      },
      "serviceGroup": {
        "add": {
          "title": "Create Service Group"
        },
        "allServices": "All services",
        "daysInfo": "Deactivate days that don't apply to this service group",
        "daysInfoError": "At least one day should be active",
        "daysInfoLocal": "Deactivate days that don't apply to this service group. At least one day should be active.",
        "daysTitle": "Active Days",
        "deleteConfirmText": "Are you sure you want to delete this service group?",
        "deleteConfirmTitle": "Delete Service Group",
        "edit": {
          "title": "Edit Service Group"
        },
        "emptyServiceIdsExplaination": "Select at least two service IDs",
        "emptyServiceIdsIntersectionExplaination": "{{days_of_week}} can't be excluded from the service group '{{service_group_name}}' because that would invalidate the service group '{{service_group_name}}.'\n To exclude {{days_of_week}} from the service ID '{{service_id_name}}' anyway, first delete the service group '{{service_group_name}}.'",
        "groupNameTitle": "Group Name",
        "nameInfo": "Keep the auto-generated name or click to edit it",
        "serviceIdsListExplain": "Select existing service IDs to combine them in a service group",
        "serviceIdsListTitle": "Service ID"
      },
      "special": {
        "add": {
          "title": "Add Special Service ID"
        },
        "deleteConfirmText": "Are you sure you want to delete this special service ID, including all of its assigned trips on all routes in {{timeplan}}? This can't be undone.",
        "deleteConfirmTitle": "Delete Special Service ID",
        "edit": {
          "title": "Enter name of special service ID"
        },
        "nameInfo": "(You will be able to select this special service ID for all routes)",
        "namePlaceholder": "e.g., Christmas",
        "nameTitle": "Enter a special service ID"
      }
    },
    "signChooser": "Route: {{sign}}",
    "stop": {
      "distPlaceholder": "Distance",
      "factorPlaceholder": "+ Factor"
    },
    "timesBatchEdit": {
      "header": "Offset stop arrival times",
      "headerInfo": "Add or subtract a set amount of time (in minutes or seconds). This time offset will apply to all selected stop arrival times and any subsequent ones. Previous arrival times will not be changed.",
      "offsetLabel": "Time offset",
      "offsetLabelTooltip": "When subtracting times, the adjusted time cannot precede the previous stop arrival time",
      "placeholder": "Select stops",
      "stops": "Stops"
    },
    "timetables": {
      "addCustomTrip": {
        "disabledHint": "Add custom trip is not supported in route group mode.",
        "hint": "Adding a custom trip allows you to assign an existing route pattern or create a new pattern, then set arrival times for relevant timepoints. Running times will be created automatically according to set arrival times.",
        "title": "Add custom trip"
      },
      "addTrip": "Add a single trip",
      "addTrips": "Add trips",
      "allVehicles": "All",
      "columns": {
        "alightingTime": "Alighting Time",
        "interline_id": "Interline ID",
        "onBoardingTime": "Boarding Time",
        "pattern": "Pattern",
        "routeDistance": "Distance",
        "service": "Service ID",
        "startHeadway": "Start headway",
        "systemTripId": "Sys Trip-ID",
        "totalTravelTime": "Travel Time",
        "tripId": "Trip ID",
        "vehicleTypes": "Vehicle types"
      },
      "defaultTime": "Default Time:",
      "deleteTimes": "Clear running times",
      "deleteTripsConfirmText": "Are you sure you wish to delete \"{{num}}\" trips?",
      "deleteTripsConfirmTitle": "Delete trips",
      "disabledPatternHint": "Patterns of multiple routes can't be changed simultaneously",
      "displayBStops": "Display all bus stops",
      "displayTPoints": "Display only timepoints",
      "dotMenu": {
        "batchEditTimes": "Offset stop arrival times",
        "editVehicleTypes": "Edit vehicle types",
        "reverseBathEditTimes": "Revert stop arrival times",
        "tripIdGenerator": "Trip ID Generator"
      },
      "endTime": "End time",
      "frequency": "HEADWAY",
      "headwayLimit": "This number must be below {{relativeLimit}} minutes to keep all trip times within the maximum limit of 36 hours.",
      "hiddenColumns": "Hidden columns",
      "moreActions": "More actions",
      "newPattern": {
        "addNew": "New",
        "description": {
          "label": "Description",
          "placeHolder": "Enter a description (optional)"
        },
        "patternName": {
          "label": "Pattern name",
          "placeHolder": "Name"
        },
        "sourcePattern": {
          "hint": "Select a source pattern - you can then deselect stops to create a new route pattern",
          "label": "Source pattern"
        },
        "title": "Add new pattern"
      },
      "noResultsFromFilter": "Filter returned no results",
      "pasteRouteStops": "Paste the route stops from Excel",
      "pasteTimetable": "Paste the timetable from Excel",
      "pasteTravelTimes": "Paste running times from Excel",
      "pinchPoint": "Control point",
      "resetOrder": "Reset Order",
      "restoreDefaultTimes": "Restore Default Times",
      "restoreDefaultTimesText": "Are you sure you want to restore the default times for all trips of route {{routeName}}, {{directionName}}, {{serviceId}}?",
      "rightClickMenu": {
        "end": "End trip here",
        "start": "Start trip here",
        "syncWarning": "The edited trip will have same stop sequence as pattern {{patternName}}. To mantain the current stop times, the trip's running times will be overwritten. Are you sure want to continue?"
      },
      "rowsSelected": "{{num}} Rows Selected",
      "selectedTrips": "Selected trips:",
      "selectStopsHint": "Select/deselect stops to add/remove them from the new route pattern",
      "startTime": "Start time",
      "tableTimeLayers": {
        "checkboxLabels": "Layers",
        "headwaysBtn": "Headways",
        "runningTimesBtn": "Running Times"
      },
      "timelayersOptions": "Manage Layers",
      "travelTimesMissing": "Running Times Missing",
      "travelTimesMissingMessage": "The service ID \"{{serviceName}}\" is missing travel times. </br> Go to the Travel times tab to fill them in.",
      "ttMore": "More"
    },
    "toastForCreateGisLayer": "The \"{{layerName}}\" GIS layer was added in Custom Map Layers.",
    "toastForNaptanGisTitle": "Stops updated from NaPTAN database",
    "toastForUpdatedGisLayer": "The \"{{layerName}}\" GIS layer was updated in Custom Map Layers.",
    "toastNoStopsUpdated": "No stops were updated",
    "toastStopsUpdated": "{{number}} Stops were updated in the stop catalog.",
    "toastStopsUpdatedTitle": "Stops updated from NaPTAN database",
    "updateNapatanStops": "Update Stops",
    "updateStopsHint": "Only existing stops can be updated",
    "vehiclesView": {
      "button": "Vehicle view",
      "ganttDisplay": "Gantt display",
      "graphDisplay": "Graph display",
      "prefToolTip": "Adjust vehicle view preferences",
      "tableDisplay": "Table display",
      "toolTip": "Preliminary vehicle view for current trips on this timetable"
    },
    "vehicleType": {
      "addTitle": "Add New Vehicle Type",
      "defaultTitle": "Assign this vehicle type to all new routes",
      "deleteConfirmText": "Are you sure you want to delete vehicle type \"{{vehicle}}\" from this timeplan? All of the trips that are assigned to this vehicle type will be re-assigned to the other vehicle types available for their respective routes.",
      "deleteConfirmTitle": "Delete Vehicle Type from Timeplan",
      "descrPlaceholder": "Enter vehicle type",
      "descrTitle": "Vehicle Type",
      "editTitle": "Edit the vehicle type",
      "editTitlePlural": "Edit vehicle types",
      "listEmpty": "No vehicles types added",
      "listTitle": "Select vehicles types",
      "mandatory": "This field can't be empty",
      "nameExists": "This name is already taken",
      "nameInfo": "An abbreviated name will be auto-generated based on the vehicle type you entered. Keep it or click to edit it.",
      "namePlaceholder": "Abbreviated name",
      "passengersPlaceholder": "Enter passenger capacity",
      "passengersSpeed": "(P:{{p}}, S:{{s}}kmph)",
      "passengersTitle": "Passenger Capacity",
      "speedPlaceholder": "Enter average speed (km/h) [or mph]",
      "speedTitle": "Average Speed (km/h) [or mph]",
      "unasignConfirmText": "Are you sure you want to remove vehicle type \"{{vehicle}}\" from route {{sign}}? All of route {{sign}}'s trips that are assigned to this vehicle type will be re-assigned to the other vehicle types available for this route.",
      "unasignConfirmTitle": "Remove Vehicle Type from Route",
      "validNumber": "Use a valid number",
      "vehicleTypes": "Vehicle types:",
      "vehicleTypesSelected": "Vehicle Types Selected:"
    }
  },
  "timeRange": {
    "from": "From:",
    "nextDay": "Next Day",
    "remove": "Remove",
    "removeTip": "Remove Time Range",
    "to": "To:"
  },
  "timetables": {
    "header": "Timetables",
    "importTimetable": "Import Timetable",
    "menu": {
      "timetable": "Timetable",
      "timetables": "Timetables",
      "travelTimes": "Running times"
    },
    "newTimetable": "New",
    "noTimetables": "No timetables to show",
    "remove": {
      "text": "Are you sure you want to delete timetable \"{{name}}\"?",
      "title2": "Delete a timetable"
    },
    "route": {
      "direction": "direction",
      "sign": "route"
    },
    "signChooser": "Route {{sign}}",
    "title": {
      "name": "Timetable name"
    },
    "tripIdGenerator": {
      "clearIds": "Clear selected IDs",
      "content": {
        "sequental": {
          "interval": "Interval",
          "startAt": "Starts at"
        },
        "tripStartTime": {
          "label": "ID calculated according to trip start time"
        }
      },
      "dropdownPlaceholder": "Select generator",
      "duplicateDialog": {
        "message": "Some of the trip IDs are already in use. If you confirm, the existing IDs will be overridden and you will need to assign them new IDs. Are you sure you want to continue?",
        "title": "Override existing trip IDs"
      },
      "empty": "Please select a generator",
      "header": "Trip ID generator",
      "options": {
        "sequental": "Sequential",
        "tripStartTime": "Trip start times"
      },
      "removeIds": {
        "message": "Are you sure you want to delete selected trip IDs?",
        "title": "Delete trip IDs"
      }
    }
  },
  "Title": "en",
  "travel_times": {
    "confirm_dialog": {
      "message": "To fix it, go to the route tab to change the first/last stop of the pattern to a timepoint.",
      "title": "RUNNING TIMES can't BE CALCULATED"
    }
  },
  "units": {
    "kg": "kg",
    "km": "km",
    "meters": "m",
    "mi": "mi",
    "Min": "Min",
    "minutes": "minutes"
  },
  "validationErrors": {
    "attendance_and_relief_time": {
      "incompatible_attendance": {
        "details": "Attendance between {{start_time}} and {{end_time}} is not compatible with the relief timing preference.",
        "header": "Relief timing preference - attendance is not compatible with the preference"
      },
      "missing_attendance": {
        "details": "The vehicle is unattended between {{start_time}} and {{end_time}}.",
        "header": "Relief timing preference - vehicle is unattended"
      },
      "unattended_vehicle": {
        "details": "The recharge event between {{start_time}} and {{end_time}} does not meet the Relief Timing preference definition because the vehicle is unattended. Change the preference to allow the vehicle to be unattended or change the recharge event to have a driver in attendance.",
        "header": "Relief Timing preference - unattended vehicle"
      }
    },
    "average_global_constraint": {
      "equal": {
        "details": "The average value of global constraint {{name}} ({{actual}}) is not equal to {{expected}}, (duty count is {{duty_count}})",
        "header": "Global constraint unsatisfied"
      },
      "greater": {
        "details": "The average value of global constraint {{name}} ({{actual}}) is less than {{expected}}, (duty count is {{duty_count}})",
        "header": "Global constraint unsatisfied"
      },
      "less": {
        "details": "The average value of global constraint {{name}} ({{actual}}) is more than {{expected}}, (duty count is {{duty_count}})",
        "header": "Global constraint unsatisfied"
      }
    },
    "battery_overcharge": {
      "details": "The state of charge at {{time}} exceeds the allowed threshold of {{energy_upper_bound}}%.",
      "header": "State of charge exceeds the allowed threshold",
      "partial": "State of charge exceeds the allowed threshold"
    },
    "charger_capacity": {
      "details": "The capacity of the charger \"{{type}}\" exceeds the allowed threshold of {{capacity}} at \"{{stop_name}}\" between {{start_time}} and {{end_time}}.",
      "header": "Charger capacity exceeds the allowed threshold",
      "partial": "Charger capacity exceeds the allowed threshold"
    },
    "charging_time_not_in_profile_allowed_range": {
      "above_maximum": {
        "details": "The recharge event starting at {{start_time}} must be no longer than {{upper_bound}} minutes.",
        "header": "Charging time is above the maximum",
        "partial": "Charging time is above the maximum"
      },
      "below_minimum": {
        "details": "The recharge event starting at {{start_time}} needs to be at least {{lower_bound}} minutes.",
        "header": "Charging time is below the minimum",
        "partial": "Charging time is below the minimum"
      }
    },
    "continuous_attendance": {
      "missing_attendance": {
        "details": "Missing attendance - violation at {{stop}} between {{start_time}} and {{end_time}}",
        "header": "Missing attendance"
      }
    },
    "crew_discontinuity": {
      "details": "The \"{{source_stop}}\" stop is too far from the \"{{target_stop}}\" stop.",
      "header": "Stops are too far",
      "partial": "Stops are too far"
    },
    "currErrors": "Route {{route}}",
    "currErrorsDismissed": "Dismissed Issues of {{route}}",
    "days_off": {
      "consecutive_days_off_below_threshold": {
        "details": "There are not enough consecutive days off. The number of consecutive days off should be {{consecutive_day_off}}. (Group {{group_id}}, Roster {{roster_id}})",
        "header": "There are not enough consecutive days off",
        "partial": "There are not enough consecutive days off. The number of consecutive days off should be {{consecutive_day_off}}"
      },
      "consecutive_work_days_above_threshold": {
        "details": "There are too many consecutive work days. The number of consecutive work days should be less than {{max_consecutive_work_days}}. (Group {{group_id}}, Roster {{roster_id}})",
        "header": "There are too many consecutive work days",
        "partial": "There are too many consecutive work days. The number of consecutive work days should be less than {{max_consecutive_work_days}}"
      },
      "days_off_above_threshold": {
        "details": "There are too many days off. Number of days off should be between {{min_days_off}} and {{max_days_off}}. (Group {{group_id}}, Roster {{roster_id}})",
        "header": "There are too many days off",
        "partial": "There are too many days off. Number of days off should be between {{min_days_off}} and {{max_days_off}}."
      },
      "days_off_below_threshold": {
        "details": "There are not enough days off. Number of days off should be between {{min_days_off}} and {{max_days_off}}. (Group {{group_id}}, Roster {{roster_id}})",
        "header": "There are not enough days off",
        "partial": "There are not enough days off. Number of days off should be between {{min_days_off}} and {{max_days_off}}"
      },
      "days_off_invalid_stop_after": {
        "details": "The duty after the day off (at index {{day_off_index}}) has invalid stops (Group {{group_id}}, Roster {{roster_id}})",
        "header": "Invalid stops after day off",
        "partial": "The duty after the day off (at index {{day_off_index}}) has invalid stops"
      },
      "days_off_invalid_stop_before": {
        "details": "The duty before the day off (at index {{day_off_index}}) has invalid stops (Group {{group_id}}, Roster {{roster_id}})",
        "header": "Invalid stops before day off",
        "partial": "The duty before the day off (at index ({{day_off_index}}) has invalid stops"
      }
    },
    "dayThreshold": "{{day}} ({{current_percentage}}%)",
    "dayThresholdIndex": "{{day}} ({{current_percentage}}%, index {{dayIdx}})",
    "depots": {
      "not_enough_capacity": {
        "details": "In the Depot Setup preference, you specified {{range}} vehicles for the {{depot_name}} depot. But there are {{actual_number_in_depot}} vehicles for the {{depot_name}} depot in your schedule.",
        "header": "Depot {{depot}}'s capacity {{capacity}} has been exceeded. {{vehicles}} are allocated to it"
      },
      "not_enough_capacity_for_vehicle_type": {
        "details": "In the Depot Setup preference, you specified {{range}} {{vehicle_type}} vehicles for the {{depot_name}} depot. But there are {{actual_number_in_depot}} {{vehicle_type}} vehicles for the {{depot_name}} depot in your schedule.",
        "header": "Depot {{depot}}'s capacity {{capacity}} has been exceeded. {{vehicles}} are allocated to it"
      }
    },
    "depot_access": {
      "end_day_wrong_access_distance": {
        "details": "End-of-day pull-in to {{depot}} access distance must be at least {{required}}, but it is {{actual}}",
        "header": "Depot access preference - Short pull-in distance"
      },
      "end_day_wrong_access_time": {
        "details": "End-of-day pull-in to {{depot}} access time must be at least {{required}} minutes, but it is {{actual}} minutes",
        "header": "Depot access preference - Short pull-in time"
      },
      "mid_day_wrong_access_distance": {
        "details": "Midday pull for {{depot}} access distance must be at least {{required}}, but it is {{actual}}",
        "header": "Depot access preference - Short distance for midday pull trip"
      },
      "mid_day_wrong_access_time": {
        "details": "Midday pull-in for {{depot}} access time must be at least {{required}} minutes, but it is {{actual}} minutes",
        "header": "Depot access preference - Short time for midday pull trip"
      },
      "start_day_wrong_access_distance": {
        "details": "Start-of-day pull-out from {{depot}} access distance must be at least {{required}}, but it is {{actual}}",
        "header": "Depot access preference - Short pull-out distance"
      },
      "start_day_wrong_access_time": {
        "details": "Start-of-day pull-out from {{depot}} access time must be at least {{required}} minutes, but it is {{actual}} minutes",
        "header": "Depot access preference - Short pull-out time"
      }
    },
    "dismissedIssues": "Dismissed issues",
    "dismissedIssuesCount": "Dismissed issues: {{count}}",
    "dismissIssuesButton": "Dismiss issues",
    "driver_walk": {
      "not_enough_time": {
        "details": "Walk at {{time_of_walk}} required time ({{available_time}}) is more than the available time ({{required_time}})",
        "header": "No sufficient walking time"
      },
      "too_far": {
        "details": "Walk at {{time_of_walk}} distance ({{distance}}) is more than the allowed distance ({{allowed_distance}})",
        "header": "Walk distance exceeded"
      },
      "too_many_walks": {
        "details": "Walk at {{time_of_walk}} is the number {{walk_count}} walk and only {{allowed_count}} walks are allowed",
        "header": "Too many walks"
      }
    },
    "driver_work_limitation": {
      "long_schedule_break_unsatisfied": {
        "details": "Long schedule break requirement is not satisfied",
        "header": "Driver work limitation: Long schedule break requirement is not satisfied"
      },
      "max_driving_time_unsatisfied": {
        "details": "Duty's driving time: {{driving_time}} exceeds the defined limit",
        "header": "Driver work limitation: Max driving time exceeded"
      },
      "max_duty_length_unsatisfied": {
        "details": "Duty's spread time: {{spread_time}} exceeds the defined limit",
        "header": "Driver Work Limitation - Max spread time exceeded"
      },
      "max_work_time_unsatisfied": {
        "details": "Duty's work time: {{work_time}} exceeds the defined limit",
        "header": "Driver work limitation: Max work time exceeded"
      },
      "relaxed_sliding_window_break_unsatisfied": {
        "details": "Sliding window break requirement is not satisfied; first unsatisfied time: {{unsatisfied_time}}",
        "header": "Driver work limitation: Breaks unsatisfied"
      },
      "sliding_window_break_unsatisfied": {
        "details": "Sliding window break requirement is not satisfied; first unsatisfied time: {{unsatisfied_time}}",
        "header": "Driver work limitation: Breaks unsatisfied"
      }
    },
    "duties": "Duties",
    "dutiesErrors": "Duty Issues",
    "dutiesErrorsDismissed": "Dismissed duty issues",
    "duties_in_stack": {
      "details": "There are uncovered vehicle events placed in the duty stack",
      "header": "Uncovered vehicle events in duty stack"
    },
    "duty": "Duty",
    "duty_relief": {
      "end_of_attendance": {
        "details": "Relief at {{time}} should happen at the departure",
        "header": "Wrong timing of relief"
      },
      "no_matching_relief": {
        "details": "Relief at {{time}} has no matching duty layover relief definition",
        "header": "Wrong timing of relief"
      },
      "relief_time_before_task": {
        "details": "Relief at {{time}} should happen {{expected}} minutes before next departure but it happens {{actual}} minutes instead",
        "header": "Wrong timing of relief"
      },
      "start_of_attendance": {
        "details": "Relief at {{time}} should happen at the arrival",
        "header": "Wrong timing of relief"
      }
    },
    "duty_type_preference": {
      "duty_type_unsatisfied": {
        "details": "Duty type \"{{duty_type}}\" doesn't match the duty details expressed in the preferences. Allowed types are: {{legal_duty_types}}",
        "header": "Duty type mismatch"
      },
      "not_allowed_type": {
        "details": "Duty type \"{{duty_type}}\" is not allowed",
        "header": "Not allowed duty type"
      }
    },
    "emptyList": "No issues found",
    "filteredIssues": "Filtered issues",
    "filterIssues": "Filter issues",
    "globalErrors": "Global Issues",
    "globalErrorsDismissed": "Dismissed global issues",
    "global_constraints": {
      "equal": {
        "details": "Number of duties that matches global constraint {{name}} ({{actual}}) is not equal to {{expected}}",
        "header": "Global constraint unsatisfied"
      },
      "greater": {
        "details": "Number of duties that matches global constraint {{name}} ({{actual}}) is less than {{expected}}",
        "header": "Global constraint unsatisfied"
      },
      "less": {
        "details": "Number of duties that matches global constraint {{name}} ({{actual}}) is more than {{expected}}",
        "header": "Global constraint unsatisfied"
      }
    },
    "group": "Group",
    "homogeneity": {
      "full_route_homogeneity": {
        "details": "The constraint could not be fulfilled. The roster includes different routes (Group {{group_id}}, Roster {{roster_id}})",
        "header": "Roster includes different routes",
        "partial": "The constraint could not be fulfilled. The roster includes different routes"
      },
      "roster_multiple_grouping_key": {
        "details": "Roster does not satisfy the homogeneity preference (Group {{group_id}}, Roster {{roster_id}})",
        "header": "Roster does not satisfy homogeneity",
        "partial": "Roster does not satisfy the homogeneity preference"
      }
    },
    "illegal_deadhead": {
      "details": "A temporary deadhead has been placed between {{origin}} and {{destination}} at {{time}}. Add the deadhead to the catalog.",
      "header": "Deadhead not in catalog and temporary deadhead is used"
    },
    "illegal_lat_long_coordinates": {
      "details": "Stop {{stop}} has illegal latitude–longitude coordinates: {{coordinates}",
      "header": "Illegal coordinates for stop"
    },
    "issuesDismissedCount": "{{count}} Issues dismissed",
    "long_break_restriction": {
      "details": "The break between {{start_time}} and {{end_time}}, with a duration of {{duration}}, exceeds the maximum allowed break time",
      "header": "Long break restriction"
    },
    "low_battery": {
      "below_or_equal_to_zero": {
        "details": "Recharge needed. The battery is fully discharged as of {{time}}. At least {{energy_in_kwh}} kWh needed to reach the minimum charge of {{energy_lower_bound}}%.",
        "header": "Battery is fully discharged",
        "partial": "Battery is fully discharged"
      },
      "between_zero_and_minimum": {
        "details": "Recharge needed. State of charge is below the {{energy_lower_bound}}% minimum between {{start_time}} and {{end_time}}.",
        "header": "State of charge is below the minimum",
        "partial": "State of charge is below the minimum"
      }
    },
    "mid_day_parking": {
      "mid_day_violation": {
        "details": "Illegal or missing midday park at {{stop}}, at {{time}}",
        "header": "Missing or illegal midday park"
      }
    },
    "missing_charger": {
      "details": "The recharge event starting at {{start_time}} has no matching charger in the Charger preference.",
      "header": "Missing charger",
      "partial": "Missing charger"
    },
    "missing_charging_location": {
      "details": "The stop associated with the recharge event starting at {{start_time}} isn't defined as a charging station in the Charging Station preference",
      "header": "Missing charging station",
      "partial": "Missing charging station"
    },
    "missing_charging_profile": {
      "details": "The recharge event starting at {{start_time}} has no matching charging \"{{charging_profile}}\" profile in the preferences.",
      "header": "Missing charging profile",
      "partial": "Missing charging profile"
    },
    "missing_deadhead": {
      "details": "Missing deadhead between {{first_event}} arriving at stop {{first_event_destination}} at {{first_event_start}} and {{second_event}} departing at stop {{second_event_origin}} at {{second_event_start}}",
      "header": "Missing Deadhead"
    },
    "noIssues": "No issues",
    "openIssues": "Open issues",
    "openIssuesCount": "Open issues: {{count}}",
    "otherErrors": "Other group issues",
    "otherGroupIssuesDismissedCount": "Other groups: {{count}} Issues dismissed",
    "otherGroupNoIssues": "Other groups: No issues",
    "otherGroupOpenIssuesCount": "Other group issues: {{count}}",
    "overlaps": {
      "details": "There is an overlap of {{overlap}} minutes between a {{first_event}}, which starts at {{first_event_start}}, and {{second_event}}, which starts at {{second_event_start}}",
      "header": "Event overlapping"
    },
    "percentage_global_constraint": {
      "equal": {
        "details": "The percentage value of global constraint {{name}} ({{actual}}%) is not equal to {{expected}}%, (duty count is {{duty_count}})",
        "header": "Global constraint unsatisfied"
      },
      "greater": {
        "details": "The percentage value of global constraint {{name}} ({{actual}}%) is less than {{expected}}%, (duty count is {{duty_count}})",
        "header": "Global constraint unsatisfied"
      },
      "less": {
        "details": "The percentage value of global constraint {{name}} ({{actual}}%) is more than {{expected}}%, (duty count is {{duty_count}})",
        "header": "Global constraint unsatisfied"
      }
    },
    "recharge_battery_unmatched": {
      "details": "The charging profile for the recharge event starting at {{start_time}} is not compatible with the vehicle’s battery.",
      "header": "Charging profile is not compatible with the battery",
      "partial": "Charging profile is not compatible with the battery"
    },
    "recharge_event_on_non_electric_vehicle": {
      "details": "The recharge event starting at {{start_time}} is not compatible with this vehicle type.",
      "header": "Recharge event is not compatible with electric vehicles",
      "partial": "Recharge event is not compatible with electric vehicles"
    },
    "refuel_event_on_electric_vehicle": {
      "details": "The refuel event starting at {{start_time}} is not compatible with this vehicle type.",
      "header": "Refuel event is not compatible with electric vehicles",
      "partial": "Refuel event is not compatible with electric vehicles"
    },
    "relief_point_preference": {
      "wrong_relief_location": {
        "details": "Relief at {{stop_name}} at {{time}} is not part of the required relief points ({{pref_name}})",
        "header": "Relief point preference - Illegal relief point"
      }
    },
    "rest_time": {
      "not_enough_rest_time": {
        "details": "There is not enough rest time between duties (Group {{group_id}}, Roster {{roster_id}})",
        "header": "There is not enough rest time",
        "partial": "There is not enough rest time between duties"
      },
      "not_enough_rest_time_after": {
        "header": "There is not enough rest time after this duty",
        "partial": "There is not enough rest time after this duty"
      },
      "not_enough_rest_time_before": {
        "header": "There is not enough rest time before this duty",
        "partial": "There is not enough rest time before this duty"
      }
    },
    "roster": "Roster",
    "rosters": "Rosters",
    "roster_custom": {
      "roster_is_invalid_due_to_custom_preference": {
        "details": "Roster is invalid due to custom preference.",
        "header": "Roster is invalid due to custom preference.",
        "partial": "Roster is invalid due to custom preference."
      }
    },
    "roster_groups": {
      "roster_count_above_threshold": {
        "details": "There are too many rosters in group (max number of allowed rows is {{max_rows}})",
        "header": "There are too many rosters in group",
        "partial": "There are too many rosters in group (greater than {{max_rows}})"
      },
      "roster_count_below_threshold": {
        "details": "There are not enough rosters in group (min number of allowed rows is {{min_rows}})",
        "header": "There are not enough rosters in group",
        "partial": "There are not enough rosters in group (less than {{min_rows}})"
      },
      "roster_group_duties_not_allowed": {
        "details": "Duty '{{task_id}}' is not allowed in roster group as they were filtered by a custom expression (Group {{group_id}}, Roster {{roster_id}}, Duty {{task_id}})",
        "header": "Duties not allowed in roster group",
        "partial": "Duty '{{task_id}}' is not allowed in roster group as they were filtered by a custom expression"
      },
      "roster_group_duties_not_allowed_depots": {
        "details": "\"Duty '{{task_id}}' is not allowed in roster group since it has invalid depots - (start: {{start_depot}}, end: {{end_depot}}) (Group {{group_id}}, Roster {{roster_id}}, Duty {{task_id}})",
        "header": "Duties not allowed in roster group (invalid depot)",
        "partial": "Duty '{{task_id}}' is not allowed in roster group since it has invalid depots - (start: {{start_depot}}, end: {{end_depot}})"
      },
      "roster_group_duties_not_allowed_duty_ids": {
        "details": "Duty '{{task_id}}' is not allowed in roster group since it has an invalid duty ID (Group {{group_id}}, Roster {{roster_id}}, Duty {{task_id}})",
        "header": "Duties not allowed in roster group (invalid duty ID)",
        "partial": "Duty '{{task_id}}' is not allowed in roster group since it has an invalid duty ID"
      },
      "roster_group_duties_not_allowed_duty_types": {
        "details": "Duty '{{task_id}}' is not allowed in roster group since it has an invalid duty type - {{task_duty_type}} (Group {{group_id}}, Roster {{roster_id}}, Duty {{task_id}})",
        "header": "Duties not allowed in roster group (invalid duty type)",
        "partial": "Duty '{{task_id}}' is not allowed in roster group since it has an invalid duty type - {{task_duty_type}}"
      },
      "roster_group_duties_not_allowed_pref_group": {
        "details": "Duty '{{task_id}}' is not allowed in roster group since it has an invalid preference group - {{pref_group}} (Group {{group_id}}, Roster {{roster_id}}, Duty {{task_id}})",
        "header": "Duties not allowed in roster group (invalid preference group)",
        "partial": "Duty '{{task_id}}' is not allowed in roster group since it has an invalid preference group - {{pref_group}}"
      },
      "roster_group_duties_not_allowed_routes": {
        "details": "Duty '{{task_id}}' is not allowed in roster group since it does not contain route(s) '{{task_routes}} (Group {{group_id}}, Roster {{roster_id}}, Duty {{task_id}})'",
        "header": "Duties not allowed in roster group (invalid route)",
        "partial": "Duty '{{task_id}}' is not allowed in roster group since it does not contain route(s) '{{task_routes}}'"
      }
    },
    "roster_paid_time": {
      "above_max_allowed_paid_time": {
        "details": "Roster paid time exceeds the allowed threshold of {{limit}} hours. (Group {{group_id}}, Roster {{roster_id}})",
        "header": "Roster paid time exceeds the allowed threshold",
        "partial": "Roster paid time exceeds the allowed threshold of {{limit}} hours."
      },
      "below_min_allowed_paid_time": {
        "details": "Roster paid time is below the {{limit}} hours limit. (Group {{group_id}}, Roster {{roster_id}})",
        "header": "Roster paid time is below the minimum",
        "partial": "Roster paid time is below the {{limit}} hours limit."
      }
    },
    "roster_patterns": {
      "days_off_pattern_required_minimum_not_reached": {
        "details": "Roster cycle requires {{min_days_off}} days off before changing the cycle segment type.",
        "header": "Invalid roster cycle segment change.",
        "partial": "Roster cycle requires {{min_days_off}} days off before changing the cycle segment type."
      },
      "day_type_change_is_required_after_amount_of_days_off": {
        "details": "Roster cycle segment should change after {{min_days_off}} days off.",
        "header": "Invalid roster cycle segment change.",
        "partial": "Roster cycle segment should change after {{min_days_off}} days off."
      },
      "day_type_span_standby_type_validation": {
        "details": "Invalid standby type '{{standby_type}}' for cycle segment {{day_type_span}}. The allowed standby type is {{allowed_standby}}.",
        "header": "Invalid standby type for cycle segment",
        "partial": "Invalid standby type '{{standby_type}}' for cycle segment {{day_type_span}}"
      },
      "duty_not_allowed_in_the_day_type": {
        "details": "Duty {{duty_id}} in roster {{roster_id}} can't be associated with cycle segment '{{day_type_span}}'.",
        "header": "Duty can't be associated with cycle segment",
        "partial": "Duty {{duty_id}} can't be associated with cycle segment '{{day_type_span}}'."
      },
      "full_roster_day_type_pattern_has_roster_with_multiple_day_types_validation": {
        "details": "Only one cycle segment is allowed per roster; segments should only change between rosters.",
        "header": "Invalid roster cycle segment change.",
        "partial": "Only one cycle segment is allowed per roster"
      },
      "segment_with_number_of_standby_tasks_per_day_lower_than_threshold": {
        "details": "Insufficient standby tasks for cycle segment {{segment}} ({{minimum_threshold_percentage}}% needed)",
        "header": "Insufficient standby tasks for cycle segments ({{minimum_threshold_percentage}}% needed).",
        "partial": "Insufficient standby tasks for cycle segment ({{minimum_threshold_percentage}}% needed)."
      },
      "task_cycle_segment_is_not_one_of_the_cycle_segments": {
        "details": "The assigned segment type is not defined in active roster cycle {{pattern_name}} (Group {{group_id}}, Roster {{roster_id}}).",
        "header": "Assigned segment type not defined in the active cycle preference",
        "partial": "The assigned segment type is not defined in active roster cycle {{pattern_name}}"
      }
    },
    "roster_types": {
      "no_roster_type_is_not_allowed": {
        "details": "There must be a roster type (Roster {{roster_id}}, Group {{group_id}})",
        "header": "There must be a roster type",
        "partial": "There must be a roster type"
      },
      "roster_type_is_not_allowed": {
        "details": "Roster type is not allowed (Group {{group_id}}, Roster {{roster_id}})",
        "header": "Roster type is not allowed",
        "partial": "Roster type is not allowed"
      }
    },
    "routesErrors": "Other Routes",
    "routesErrorsDismissed": "Dismissed issues of other routes",
    "scheduleHint": "Validate this schedule",
    "segmentThreshold": "{{segment}} segment: on {{days}}",
    "selectedGroupIssuesDismissedCount": "Selected group: {{count}} Issues dismissed",
    "selectedGroupNoIssues": "Selected group: No issues",
    "selectedGroupOpenIssuesCount": "Selected group issues: {{count}}",
    "selectErrors": "Selected group issues",
    "standby_preference": {
      "day_with_number_of_standby_tasks_lower_than_threshold": {
        "details": "There are insufficient standby tasks ({{day}}, {{current_percentage}}% of {{minimum_threshold_percentage}}% needed)",
        "header": "There are insufficient standby tasks ({{minimum_threshold_percentage}}% needed)",
        "partial": "There are insufficient standby tasks ({{minimum_threshold_percentage}}% needed)"
      },
      "standby_type_does_not_exist_or_not_enabled": {
        "details": "There is no matching standby type '{{standby_type}}' in the Standbys preference. The standby type might have been deleted or paused.",
        "header": "Assigned standby types are not defined in the preferences."
      }
    },
    "taxi_with_travel_preferences": {
      "details": "The {{travel_type}} trip starting at {{start_time}} needs to be updated. Deleting the trip will auto-update it.",
      "header": "{{travel_type}} trip needs to be updated",
      "partial": "{{travel_type}} trip needs to be updated"
    },
    "timeplans": {
      "broken_data": {
        "broken_shape": {
          "header": "Warning - Segments in the route’s shape are invalid"
        },
        "duplicate_user_trip_ids": {
          "header": "Warning - There are duplicate trip IDs"
        },
        "less_than_30sec_duration_trip": {
          "header": "Error - Trip duration is less than 30 seconds"
        },
        "less_than_30sec_time_travel_entire_timeband": {
          "header": "Warning - The travel time along the entire timeband is less than 30 seconds"
        },
        "less_than_two_stops_without_trips": {
          "details": "Route {{route_id}} under direction {{direction_index}} has fewer than 2 assigned stops",
          "header": "Warning - The route has fewer than 2 stops"
        },
        "less_than_two_stops_with_trips": {
          "details": "Route {{route_id}} under direction {{direction_index}} has assigned trips and fewer than 2 assigned stops",
          "header": "Error - The route has fewer than 2 stops"
        },
        "missing_directions": {
          "details": "Route {{route_id}} doesn't have any assigned directions",
          "header": "Warning - The route is missing directions"
        },
        "missing_running_times": {
          "details": "Route {{route_id}} under {{service_id}} and direction {{direction_index}} is missing running times, yet trips appear in the timetable",
          "header": "Error - running times are missing for part of the route"
        },
        "missing_running_times_derived_pattern_without_trips": {
          "details": "Route {{route_id}} under {{service_id}}, direction {{direction_index}} and pattern {{pattern_id}} is missing running times",
          "header": "Warning - A pattern that skips stops from the main route has no running times"
        },
        "missing_running_times_derived_pattern_with_trips": {
          "details": "Route {{route_id}} under {{service_id}}, direction {{direction_index}} and pattern {{pattern_id}} is missing running times",
          "header": "Error - A pattern that skips stops from the main route has no running times"
        },
        "missing_running_times_without_trips": {
          "details": "Route {{route_id}} under {{service_id}}, direction {{direction_index}} and pattern {{pattern_id}} is missing a valid travel time between stops {time_points} and interval {{time_band}}",
          "header": "Warning - Running times are missing for part of the route"
        },
        "missing_running_times_with_trips": {
          "details": "Route {{route_id}} under {{service_id}}, direction {{direction_index}} and {{pattern_id}} is missing a valid travel time between stops {time_points} and interval {{time_band}}",
          "header": "Error - Running times are missing for part of the route"
        },
        "missing_service_groups": {
          "details": "Route {{route_id}} doesn't contain {{service_groups}} service groups",
          "header": "Warning - Route is not assigned to the required service groups"
        },
        "missing_service_ids": {
          "details": "Route {{route_id}} doesn't have any assigned service IDs",
          "header": "Warning - No service IDs are assigned to the route"
        },
        "missing_stop": {
          "details": "Stop {{time_point_id}} is missing from the stop catalog",
          "header": "Error - The stop code is not in the stop catalog"
        },
        "missing_trips": {
          "details": "Route {{route_id}} under {{service_id}} and direction {{direction_index}} is missing assigned trips",
          "header": "Warning - There are no trips"
        },
        "missing_user_trip_ids": {
          "header": "Error - Some trips are missing trip IDs"
        },
        "missing_vehicle_types": {
          "details": "Route {{route_id}} has no attached vehicle types",
          "header": "Error - No vehicle types are assigned to the route"
        },
        "negative_travel_time": {
          "details": "The travel time between stops {{time_points}} in interval {{time_band}} is negative",
          "header": "Error - Travel time is negative"
        },
        "non_chronological_trip": {
          "details": "Trip {{trip}} in route {{route_id}}, direction {{direction_index}} and pattern {{pattern}} is not chronological at stop {{time_point_id}}",
          "header": "Error - The stop's time is before the previous stop's time"
        },
        "no_lat_lon_of_a_stop": {
          "details": "Stop {{time_point_id}} is missing latitude/longitude data",
          "header": "Error - Lat/long is missing for stops in the route"
        },
        "no_timepoint_at_end_of_pattern": {
          "header": "Error - The last stop of the pattern is not a timepoint"
        },
        "no_timepoint_at_start_of_pattern": {
          "header": "Error - The first stop of the pattern is not a timepoint"
        },
        "zero_distance_between_stops": {
          "header": "Warning - The distance between stops is zero"
        },
        "zero_travel_time_for_day": {
          "details": "The running times between stops {{time_points}} are zero throughout the entire day",
          "header": "Warning - Running times are zero for the entire day"
        }
      },
      "departureTime": "Departure",
      "missingField": "Missing field",
      "naptan_stop_invalid": {
        "header": "{{validation_level}} - The following stops are flagged as deleted in the NaPTAN database"
      },
      "required_fields_missing": {
        "stops_missing_meta": {
          "header": "{{validation_level}} - A stop is missing required field"
        },
        "trips_invalid_vehicle": {
          "header": "{{validation_level}} - A trip has unknown vehicle type"
        },
        "trips_missing_meta": {
          "header": "{{validation_level}} - A trip is missing required field"
        },
        "trips_missing_vehicles": {
          "header": "{{validation_level}} - A trip is missing vehicles types"
        }
      },
      "stop_problem": {
        "too_many": {
          "details": "Too many vehicles at stop {{stop}}. Only {{allowed}} are allowed, but there are currently  {{actual}}",
          "header": "Too many vehicles at stop"
        }
      },
      "time_point_departure_frequency": {
        "number_of_trips_not_valid": {
          "details": "The {{combined}} number of trips in pattern {{pattern}} for interval {{interval}} is not valid. It should be {{type}} {{expected_number_of_trips}} but the current number is {{actual_number_of_trips}}",
          "header": "Number of trips is not valid"
        },
        "number_of_trips_not_valid_at_pinch_point": {
          "details": "The {{combined}} number of trips in pattern {{pattern}} for interval {{interval}} is not valid. It should be {{type}} {{expected_number_of_trips}} but the current number is {{actual_number_of_trips}}",
          "header": "Number of trips is not valid at control point"
        },
        "trip_frequency_not_valid": {
          "details": "{{type}} frequency for trips in pattern {{pattern}} is not valid in interval {{interval}}. Actual frequency is {{actual_frequency}} when it should be {{expected_frequency}} ",
          "header": "Trip frequencies are not valid"
        },
        "trip_frequency_not_valid_at_pinch_point": {
          "details": "{{type}} frequency for trips in pattern {{pattern}} is not valid in interval {{interval}}. Actual frequency is {{actual_frequency}} when it should be {{expected_frequency}} ",
          "header": "Trip frequencies are not valid at control point"
        }
      },
      "time_point_first_start_time": {
        "no_trip_exists": {
          "header": "Warning - The start time of the first trip mismatches the preferences"
        },
        "trip_time_not_valid_at": {
          "details": "First departure for pattern {{pattern}} must be {{status}} {{expected_time}} but the actual departure is at {{actual_time}}",
          "header": "Warning - The start time of the first trip mismatches the preferences"
        },
        "trip_time_not_valid_earlier": {
          "details": "First departure for pattern {{pattern}} must be {{status}} {{expected_time}} but the actual departure is at {{actual_time}}",
          "header": "Warning - The start time of the first trip mismatches the preferences"
        },
        "trip_time_not_valid_later": {
          "details": "First departure for pattern {{pattern}} must be {{status}} {{expected_time}} but the actual departure is at {{actual_time}}",
          "header": "Warning - The start time of the first trip mismatches the preferences"
        }
      },
      "time_point_last_start_time": {
        "no_trip_exists": {
          "header": "Warning - The start time of the last trip mismatches the preferences"
        },
        "trip_time_not_valid_at": {
          "details": "Last departure for pattern {{pattern}} must be {{status}} {{expected_time}} but the actual departure is at {{actual_time}}",
          "header": "Warning - The start time of the last trip mismatches the preferences"
        },
        "trip_time_not_valid_earlier": {
          "details": "Last departure for pattern {{pattern}} must be {{status}} {{expected_time}} but the actual departure is at {{actual_time}}",
          "header": "Warning - The start time of the last trip mismatches the preferences"
        },
        "trip_time_not_valid_later": {
          "details": "Last departure for pattern {{pattern}} must be {{status}} {{expected_time}} but the actual departure is at {{actual_time}}",
          "header": "Warning - The start time of the last trip mismatches the preferences"
        }
      }
    },
    "timetables": {
      "error": "Error",
      "max_vehicle_at_route_start": "Number of vehicles at route start ({{waiting_vehicles}}) exceeds the capacity limit of {{max_vehicles}} at {{time}}",
      "short_route_preference": {
        "max_combined_frequency": "Maximum allowed combined departure frequency is {{expected_frequency}} but actual is {{actual_frequency}} in interval {{interval}} at time {{prev_time}}",
        "min_combined_frequency": "Minimum allowed combined departure frequency is {{expected_frequency}} but actual is {{actual_frequency}} in interval {{interval}} at time {{prev_time}}",
        "min_num_short_trips": "Minimum number of short trips (route: {{route}}) required in interval {{interval}} is {{expected_number_of_trips}} but there are actually {{actual_number_of_trips}} trips",
        "min_num_total_trips": "Minimum number of total trips (combined with short route: {{route}}) that is required in interval {{interval}} is {{expected_number_of_trips}} but there are actually {{actual_number_of_trips}} trips"
      }
    },
    "time_based_constraint": {
      "equal": {
        "details": "Timing constraint {{name}} at {{time_range}} ({{actual}}) is not equal to {{expected}}",
        "header": "Timing constraint unsatisfied"
      },
      "greater": {
        "details": "Timing constraint {{name}} at {{time_range}} ({{actual}}) is less than {{expected}}",
        "header": "Timing constraint unsatisfied"
      },
      "less": {
        "details": "Timing constraint {{name}} at {{time_range}} ({{actual}}) is more than {{expected}}",
        "header": "Timing constraint unsatisfied"
      }
    },
    "travel": {
      "doesnt_match_catalog": {
        "details": "The travel time or distance of the {{travel_type}} trip starting at {{start_time}} does not match the value in the catalog.",
        "header": "{{travel_type}} does not match catalog",
        "partial": "{{travel_type}} does not match catalog"
      },
      "not_by_preferences": {
        "details": "The {{travel_type}} trip starting at {{start_time}} is not permitted by the defined {{preference_name}} preference.",
        "header": "{{travel_type}} trip is not permitted",
        "partial": "{{travel_type}} trip is not permitted"
      },
      "not_in_catalog": {
        "details": "The {{travel_type}} trip starting at {{start_time}} is not in the catalog.",
        "header": "{{travel_type}} trip missing in catalog",
        "partial": "{{travel_type}} trip missing in catalog"
      }
    },
    "undismissIssuesButton": "Reactivate issues",
    "unmatched_charger_type_in_location": {
      "details": "The recharge event starting at {{start_time}} has no matching charging station in the Charging Station preference.",
      "header": "Unmatched charging station",
      "partial": "Unmatched charging station"
    },
    "unmatching_deadhead": {
      "deadhead_generated": {
        "details": "The deadhead starting at {{deadhead_start}} was created using the deadhead generator because it is not in the catalog. Add the deadhead to the catalog.",
        "header": "Deadhead generated"
      },
      "deadhead_not_in_catalog": {
        "details": "The deadhead starting at {{deadhead_start}} is not in the catalog. Add the deadhead to the catalog.",
        "header": "Deadhead missing in catalog"
      },
      "unmatching_distance": {
        "details": "The distance of the deadhead starting at {{deadhead_start}} ({{deadhead_distance}}) doesn't match the distance listed in the catalog ({{catalog_distance}})",
        "header": "Deadhead distance doesn’t match catalog"
      },
      "unmatching_generator_travel_time": {
        "details": "The deadhead starting at {{deadhead_start}} is not in the catalog. Add the deadhead to the catalog.",
        "header": "Deadhead missing in catalog"
      },
      "unmatching_travel_time": {
        "details": "The travel time of the deadhead starting at {{deadhead_start}} ({{deadhead_duration}}) doesn't match the travel time listed in the catalog ({{catalog_duration}})",
        "header": "Deadhead travel time doesn’t match catalog"
      },
      "wrong_illegal_deadhead_indication": {
        "details": "A temporary deadhead has been placed between {{origin}} and {{destination}} at {{time}}. Delete the trip to get it auto updated.",
        "header": "Temporary deadhead is used"
      }
    },
    "validationsBroken": "Validations are broken",
    "vehiclesErrors": "Vehicle Issues",
    "vehiclesErrorsDismissed": "Dismissed vehicle issues",
    "vehicles_in_stack": {
      "details": "There are vehicle events placed in the vehicle stack",
      "header": "Vehicle events in the vehicle stack"
    },
    "vehicle_distance": {
      "energy_consumption_violation": {
        "details": "Energy level is at {{energy_level}}% while lower bound is {{energy_lower_bound}}%, at time {{time}}",
        "header": "Energy consumption violation"
      },
      "fuel_distance_violation": {
        "details": "Distance {{distance}} is over the limit {{distance_limit}} at time {{time}}",
        "header": "Fuel distance violation"
      }
    },
    "vehicle_quantity": {
      "total_vehicle_quantity": {
        "details": "In the Vehicle Quantity preference, you specified {{range}} vehicles for this schedule. But there are {{actual_quantity}} vehicles in your schedule.",
        "header": "Vehicle quantity preference - global capacity"
      },
      "vehicle_quantity_per_type": {
        "details": "In the Vehicle Quantity preference, you specified {{range}} {{vehicle_type}} vehicles. But there are {{actual_quantity}} {{vehicle_type}} vehicles in your schedule.",
        "header": "Vehicle quantity preference - capacity per vehicle type"
      }
    },
    "week": "Week",
    "weeks": "Weeks",
    "weeksWithNumbers": "Weeks {{firstPeriod}}-{{lastPeriod}}",
    "weekWithNumber": "Week {{weekNo}}"
  },
  "verticalTimeline": {
    "needBigError": "The time should be between {{time1}} and {{time2}}"
  },
  "weeklyRequestParams": {
    "allWeek": "All services",
    "currentDay": "Current service",
    "title": "Apply actions on:"
  },
  "zoom": {
    "dec": "zoom out",
    "inc": "zoom in"
  }
};
